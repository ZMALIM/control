import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ControlPipesModule } from '@control/pipes/pipes.module';

import { ControlMaterialColorPickerComponent } from '@control/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        ControlMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        ControlPipesModule
    ],
    exports: [
        ControlMaterialColorPickerComponent
    ],
})
export class ControlMaterialColorPickerModule
{
}
