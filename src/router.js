// ROUTES - a component that renders when navigating to a particular URL
    // createBrowserRouter is a construction method for a Route object that can then be used to read URL and serve up components
    // createRoutesFromElements is a helper method that builds an appropriate argument for CreateBrowserRouter to take
    // a Route is an object that holds a particular path and react component that can be served up. (path, loader, element)
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { peopleLoader, personLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";
import Index from "./pages/Index";
import Show from "./pages/Show";

const router = createBrowserRouter(
    createRoutesFromElements(
        // Parent Route
        <Route path="/" element={<App/>}>
            {/* Child Routes */}
            <Route path="" element={<Index/>} loader={peopleLoader}/>
            <Route path=":id" element={<Show/>} loader={personLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router