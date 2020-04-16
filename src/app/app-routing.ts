import { Routes, RouterModule } from "@angular/router";
import { ColorSortComponent } from "./color-sort/color-sort.component";
import { BrushSortComponent } from "./brush-sort/brush-sort.component";
import { HomeComponent } from "./home/home.component";

// type Routes is provided by ng
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full' },
    {path: 'home', component: HomeComponent},
    {path: 'color-sort', component: ColorSortComponent},
    {path: 'brush-sort', component: BrushSortComponent}
];

// let ng know those routes (also need to add to app.module)
export const routing = RouterModule.forRoot(APP_ROUTES);