import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Navigation */
import HomePage from "./Components/NavigationPageAPI/HomePage.jsx";
import AboutPage from "./Components/NavigationPageAPI/AboutPage.jsx";
import LoginPage from "./Components/NavigationPageAPI/LoginPage.jsx";
import RegistrationPage from "./Components/NavigationPageAPI/RegistrationPage.jsx";
import ContactPage from "./Components/NavigationPageAPI/ContactPage.jsx";

/* Importing Hooks */
import UseStateHook from "./Components/HooksPage/UseStateExample/App.jsx";
// import UseRefHook from "./Components/HooksPage/UseRefExamples/CounterWithRef.jsx";
import UseRefHook1 from "./Components/HooksPage/UseRefExamples/InputFocus.jsx";
import UseEffectHook from "./Components/HooksPage/UseEffectExample/AsyncFnUseEffect.jsx";
import UseContextHook from "./Components/HooksPage/UseContextExample/ContextHook.jsx";
import UseMemoHook from "./Components/HooksPage/UseMemoExample/UseMemoExample.jsx";
import UseReducerHook from "./Components/HooksPage/UseReducerExample/ReducerHook.jsx";

// import UseCallbackHook from "./Components/HooksPage/UseCallbackExample/CallbackHook.jsx";
import BeforeCallback from "./Components/HooksPage/UseCallbackExample/BeforeCallback/BeforeCallback.jsx";
import AfterCallback from "./Components/HooksPage/UseCallbackExample/AfterCallback/AfterCallback.jsx";

/* Context API */
import ContextAPI from "./Components/Context-API/Main.jsx";
/* HOC */
import HOCComponent from "./Components/HOC/HoCComponent.jsx";
/* Lazy Loading */
import LazyLoading from "./Components/LazyLoading/LazyLoading.jsx";
/* MUI Reused Component */
import ReuseComponent from "./Components/Reusable-Components/MUI/MUIComponent.jsx";
/* MUI Modal Component */
// import MUIDesignModal from "./Components/MUI-Design/MUIDesignModal.jsx";
import MUILogin from "./Components/MUI-Design/Login.jsx";
/* Class Component */
import ClassComponent from "./Components/ClassComponents/ParentComponent.jsx";
/* Registration */
import RegisterForm from "./Components/CRUDRegistration/Register.jsx";
/* Custom Hook */
import CustomHook from "./Components/CustomHooks/PostList.jsx";
/* Query Param Example */
import QueryParamExample from "./Components/QueryParam/QueryParamExample.jsx";
/* Importing REDUX */
import MainApp from "./Components/REDUXToolKit/Component/App.jsx";
import ToDoListApp from "./Components/REDUXToolKit/Component/ToDoList.jsx";

/* Debouncing & Throttling */
import DebounceExample from "./Components/Debouncing&Throttling/DebounceExample.jsx";
import ThrottlingExample from "./Components/Debouncing&Throttling/ThrottleExample.jsx";

/* Axios Example */
import AxiosExample from "./Components/AxiosFetchingAPI/App.jsx";

/* App */
import App from "./App.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/MainApp",
        element: <MainApp />,
      },
      {
        path: "/ToDoListApp",
        element: <ToDoListApp />,
      },
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "/Registration",
        element: <RegistrationPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "/UseState",
        element: <UseStateHook />,
      },
      {
        path: "/UseRef",
        // element: <UseRefHook />,
        element: <UseRefHook1 />,
      },
      {
        path: "/UseEffect",
        element: <UseEffectHook />,
      },
      {
        path: "/UseContext",
        element: <UseContextHook />,
      },
      {
        path: "/UseMemo",
        element: <UseMemoHook />,
      },
      {
        path: "/UseReducer",
        element: <UseReducerHook />,
      },
      {
        path: "/UseCallback",
        // element: <UseCallbackHook />,
        element: <BeforeCallback />,
      },
      {
        path: "/AfterCallback",
        element: <AfterCallback />,
      },
      {
        path: "/ContextAPI",
        element: <ContextAPI />,
      },
      {
        path: "/HOC",
        element: <HOCComponent />,
      },
      {
        path: "/LazyLoading",
        element: <LazyLoading />,
      },
      {
        path: "/ReuseComponent",
        element: <ReuseComponent />,
      },
      {
        path: "/MUIDesignModal",
        // element: <MUIDesignModal />,
        element: <MUILogin />,
      },
      {
        path: "/ClassComponent",
        element: <ClassComponent />,
      },
      {
        path: "/CRUDRegistration",
        element: <RegisterForm />,
      },
      {
        path: "/CustomHook",
        element: <CustomHook />,
      },
      {
        path: "/QueryParamExample",
        element: <QueryParamExample />,
      },
      {
        path: "/DebounceExample",
        element: <DebounceExample />,
      },
      {
        path: "/ThrottlingExample",
        element: <ThrottlingExample />,
      },
      {
        path: "/AxiosExample",
        element: <AxiosExample />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRoute} />
  </>
);
