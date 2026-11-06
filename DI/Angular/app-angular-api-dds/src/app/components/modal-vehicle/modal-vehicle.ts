import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailItemResponse } from '../../interfaces/vehicle-detail-item-response';

@Component({
  imports: [],
  selector: 'app-modal-vehicle',
  styleUrl: './modal-vehicle.css',
  templateUrl: './modal-vehicle.html',
})
export class ModalVehicle {
  activeModal = inject(NgbActiveModal);

  @Input() vehicle: VehicleDetailItemResponse | undefined;
}
