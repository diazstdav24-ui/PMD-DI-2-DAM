import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleServices } from '../../services/vehicle-services';
import { Vehicle } from '../../interfaces/vehicle-list-response';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVehicle } from '../modal-vehicle/modal-vehicle';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage implements OnInit {
  vehicleService = inject(VehicleServices);

  modalService = inject(NgbModal);

  vehicleList = signal<Vehicle[]>([]);

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((vhe) => {
      this.vehicleList.set(vhe.results);
    });
  }
  open(id: string) {
    this.vehicleService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(ModalVehicle);
      modalRef.componentInstance.vehicle = resp;
    });
  }
}
