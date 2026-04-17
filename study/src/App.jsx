import { RouterProvider } from "react-router-dom"
import EventIntro from "./components/events/EventIntro"
import FormsIntro from "./components/form handling/FormsIntro"
import JsxIntro from "./components/JSX/JsxIntro"
import { routess } from "./components/nested routing/NestedRoute"
import PropsIntro from "./components/props/PropsIntro"
import Random from "./components/random/Random"
import ModernRouting from "./components/routing/ModernRouting"
import RoutesIntro from "./components/routing/RoutesIntro"
import Routes from "./components/routing/RoutesIntro"
import StateIntro from "./components/State/StateIntro"
import UseReducerIntro from "./components/useReducer/UseReducerIntro"
import UseMemoIntro from "./components/useMemo hook/UseMemoIntro"
import ReactMemoIntro from "./components/reactMemo/ReactMemoIntro"
import UseCallbackIntro from "./components/useCallback hook/UseCallbackIntro"
import ReduxIntro from "./components/redux/ReduxIntro"

let App = ()=> {

  return (
    <>
    {/* <div>App:-</div> */}

    {/* <JsxIntro></JsxIntro> */}
    {/* <StateIntro></StateIntro> */}
    {/* <EventIntro></EventIntro> */}

    {/* <FormsIntro></FormsIntro> */}
    {/* <PropsIntro></PropsIntro> */}

    {/* <Random></Random> */}
    {/* <RoutesIntro></RoutesIntro> */}
    {/* <ModernRouting></ModernRouting> */}
    {/* <NestedRoute></NestedRoute> */}
    {/* <RouterProvider router={routess}></RouterProvider> */}
    {/* <UseReducerIntro></UseReducerIntro> */}
    {/* <UseMemoIntro></UseMemoIntro> */}
    {/* <ReactMemoIntro></ReactMemoIntro> */}
    {/* <UseCallbackIntro></UseCallbackIntro> */}
    <ReduxIntro></ReduxIntro>
    </>
  )

}

export default App
