import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SacwsService } from '../../services/sacws.service'; // Asegúrate de ajustar la ruta al servicio correctamente
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [MatTable,MatTableModule ,MatInputModule,FormsModule,FlexLayoutModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent implements OnInit {
  clienteId:string='';
  clientee: number=0;
  selectedItem: any = {};
  displayedColumns: string[] = ['ClienteId','CorresponsalPago', 'FechaPago', 'Caja', 'Recaudador','Tipo','Valor','Conceptos'];
  clienteForm: FormGroup; 
  dataSource = new MatTableDataSource<any>(); // Inicializamos dataSource como MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private sacService: SacwsService,private formBuilder: FormBuilder,) {
    this.clienteForm = this.formBuilder.group({
      ClienteId: ['', Validators.required],
      lngTelefono: [''],
      strDvClienteId: [''],
      strNombre: [''],    
      strFichaCatastral:[''],
      strDireccionInf:['']
    });

  }

  ngOnInit(): void {
    this.cargarDatos22();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 

  cargarDatos() {
    let data = null; // Inicializar data como null antes de la suscripción
    
    this.sacService.getInvoicesByClientId(this.clienteId).subscribe({
      next: (response: any[]) => {
        data = response; 
        if (data != null && data.length > 0) {
          this.dataSource.data = data;
          this.clienteForm.patchValue(data[0]); 
          console.log('Datos:', data);
        } else {
          this.clienteForm.patchValue({
            ClienteId: null,
            lngTelefono: null,
            strDvClienteId: null,
            strNombre: null,
            strFichaCatastral:null,
            strDireccionInf:null
            // Añade más campos según sea necesario
          });
          console.log('No se encontraron datos de facturas');
        }
      },
      error: (error) => {
        console.log('Ha ocurrido un error en facturas:', error);
      }
    });
  }
  cargarDatos22() {
    let data = null;     
    this.sacService.getListServ2(this.clienteId).subscribe({
      next: (response: any[]) => {
        data = response; 
        if (data != null && data.length > 0) {
          this.dataSource.data = data;
          this.clienteForm.patchValue(data[0]); 
          console.log('Datos:', data);
        } else {
          this.clienteForm.patchValue({
            ClienteId: null,
            lngTelefono: null,
            strDvClienteId: null,
            strNombre: null,
            strFichaCatastral:null,
            strDireccionInf:null
            // Añade más campos según sea necesario
          });
          console.log('No se encontraron datos');
        }
      },
      error: (error) => {
        console.log('Ha ocurrido un error:', error);
      }
    });
  }
}
