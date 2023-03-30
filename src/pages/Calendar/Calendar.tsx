import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
    DateSelectArg,
    EventApi,
    EventClickArg,
    formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "theme";
import { useState } from "react";
import Header from "components/Header/Header";

interface CalendarProps {}

const Calendar = ({}: CalendarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    const handleDateSelection = (selected: DateSelectArg) => {
        const title = prompt("Please enter a title for the event");

        const calendarAPI = selected.view.calendar;

        if (title) {
            calendarAPI.addEvent({
                id: `${selected.startStr} -${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selectedEvent: EventClickArg) => {
        if (
            window.confirm(
                `Do you really want to delete event: '${selectedEvent.event.title}'?`,
            )
        ) {
            selectedEvent.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subTitle="Full calendar page" />

            <Box display="flex" justifyContent="space-between">
                {/* Events sidebar */}
                <Box
                    flex="1 1 20%"
                    p="15px"
                    borderRadius="4px"
                    sx={{
                        backgroundColor: colors.primary[400],
                    }}
                >
                    <Typography variant="h5">Events</Typography>

                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.startStr, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                ></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Calendar section */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            listPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateSelection}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "1234",
                                title: "Demo event",
                                date: "2023-01-01",
                            },
                            {
                                id: "4567",
                                title: "Event timed",
                                date: "2023-01-03",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
