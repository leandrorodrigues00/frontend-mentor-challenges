import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskItemComponent } from "./tasks/task-item/task-item.component";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskItemComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
