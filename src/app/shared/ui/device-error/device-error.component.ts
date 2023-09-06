import { Component } from '@angular/core';
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzResultModule} from "ng-zorro-antd/result";

@Component({
  standalone: true,
  selector: 'app-device-error',
  templateUrl: './device-error.component.html',
  imports: [
    NzEmptyModule,
    NzGridModule,
    NzResultModule
  ],
  styleUrls: ['./device-error.component.scss']
})
export class DeviceErrorComponent {}
