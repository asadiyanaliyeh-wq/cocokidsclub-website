import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل لازم است"),
    password: Yup.string().required("رمز عبور لازم است"),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const res = login(values.email, values.password);

    if (res.success) {
      navigate("/dashboard");
    } else {
      setErrors({ password: res.message || "ایمیل یا رمز عبور اشتباه است" });
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">ورود</h1>
          <p className="mt-4 text-orange-600">با ایمیل و رمز عبور وارد شوید</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <Field
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-6 py-5 text-lg text-center rounded-2xl border-2 border-orange-400 focus:outline-none focus:border-orange-500 transition"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-center"
              />

              <Field
                type="password"
                name="password"
                placeholder="رمز عبور"
                className="w-full px-6 py-5 text-lg text-center rounded-2xl border-2 border-orange-400 focus:outline-none focus:border-orange-500 transition"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-center"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-5 rounded-2xl transition-colors flex items-center justify-center gap-3"
              >
                {isSubmitting ? "در حال ورود..." : "ورود"}
                <span className="text-2xl">→</span>
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center mt-8 text-gray-600">
          حساب ندارید؟{" "}
          <Link to="/register" className="text-orange-600 font-bold hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}
