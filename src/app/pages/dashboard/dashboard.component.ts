
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo } from '../../models/veiculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  selectCarForms = new FormGroup({
    carId: new FormControl('')
  });

  constructor(private dashboardservice: DashboardService) {}

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;

      this.selectCarForms.controls.carId.valueChanges.subscribe((id) => {
        this.selectedVehicle = this.vehicles.find(v => v.id === Number(id))!;
        
      });
    });
  }

  today = new Date().toLocaleDateString();

}
