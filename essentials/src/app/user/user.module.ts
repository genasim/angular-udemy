import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [UserComponent],
    exports: [UserComponent],
    imports: [SharedModule],
})
export class UserModule {}