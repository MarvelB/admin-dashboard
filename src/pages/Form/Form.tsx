import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Header from "components/Header/Header";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

const initialValues = {
    firstName: "",
    email: "",
    lastName: "",
    address1: "",
    address2: "",
    contact: "",
};

const phoneRegEx =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userFormSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    lastName: yup.string().required("required"),
    address1: yup.string().required("required"),
    address2: yup.string(),
    contact: yup
        .string()
        .matches(phoneRegEx, "Invalid phone number")
        .required("required"),
});

interface FormProps {}

const Form = ({}: FormProps) => {
    const isMobile = useMediaQuery("(min=width:600px)");

    const handleSubmitFormik = (inputValues: typeof initialValues) => {
        console.log(inputValues);
    };

    return (
        <Box m="20px">
            <Header subTitle="CREATE USER" title="Create a new user" />

            <Formik
                onSubmit={handleSubmitFormik}
                initialValues={initialValues}
                validationSchema={userFormSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }: FormikProps<typeof initialValues>) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": {
                                    gridColumn: isMobile ? "span 4" : undefined,
                                },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="First Name"
                                name="firstName"
                                helperText={
                                    touched.firstName && errors.firstName
                                }
                                error={
                                    !!touched.firstName && !!errors.firstName
                                }
                                value={values.firstName}
                                sx={{
                                    gridColumn: "span 2",
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Last Name"
                                name="lastName"
                                helperText={touched.lastName && errors.lastName}
                                error={!!touched.lastName && !!errors.lastName}
                                value={values.lastName}
                                sx={{
                                    gridColumn: "span 2",
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email"
                                name="email"
                                helperText={touched.email && errors.email}
                                error={!!touched.email && !!errors.email}
                                value={values.email}
                                sx={{
                                    gridColumn: "span 4",
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Contact Number"
                                name="contact"
                                helperText={touched.contact && errors.contact}
                                error={!!touched.contact && !!errors.contact}
                                value={values.contact}
                                sx={{
                                    gridColumn: "span 4",
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Address 1"
                                name="address1"
                                helperText={touched.address1 && errors.address1}
                                error={!!touched.address1 && !!errors.address1}
                                value={values.address1}
                                sx={{
                                    gridColumn: "span 4",
                                }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Address 2"
                                name="address2"
                                helperText={touched.address2 && errors.address2}
                                error={!!touched.address2 && !!errors.address2}
                                value={values.address2}
                                sx={{
                                    gridColumn: "span 4",
                                }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained"
                            >
                                Create new user
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Form;
