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
  selector: 'app-informacion',
  styleUrls: ['./informacion.component.css'],
  standalone:true,
  imports: [MatTable,MatTableModule ,MatInputModule,FormsModule,FlexLayoutModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './informacion.component.html',
})
export class InformacionComponent implements OnInit {
  clienteId:string='';
  clientee: number=0;
  selectedItem: any = {};
  displayedColumns: string[] = ['strDvClienteId','lngClienteId', 'lngTelefono', 'strNombre'];
  clienteForm: FormGroup; 
  dataSource = new MatTableDataSource<any>(); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private sacService: SacwsService,private formBuilder: FormBuilder,) {
    this.clienteForm = this.formBuilder.group({
      lngClienteId: ['', Validators.required],
      lngTelefono: [''],
      strDvClienteId: [''],
      strNombre: [''],    
      strFichaCatastral:[''],
      strDireccionInf:[''],
      dDepto:[''],
      strCsEstratoMedida:[''],
      strEstadoActual:[''],
      strDEstadoFacturacion:[''],
      strDCiclo:[''],
      strDEstadoCliente:[''],
    });

  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 

  cargarDatos() {
    let data = null; // Inicializar data como null antes de la suscripción
    
    this.sacService.getByClientId(this.clienteId).subscribe({
      next: (response: any[]) => {
        console.log('Respuesta del end');
        console.log(response);
        console.log('Respuesta del end');
        data = response; // Asignar los datos recibidos del servicio a data
        if (data != null && data.length > 0) {
          this.dataSource.data = data;
          this.clienteForm.patchValue(data[0]); // Patch solo el primer elemento de data al formulario
          console.log('Datos:', data);
        } else {
          this.clienteForm.patchValue({
            lngClienteId: null,
            lngTelefono: null,
            strDvClienteId: null,
            strNombre: null,
            strFichaCatastral:null,
            strDireccionInf:null,
            dDepto:null,
            strCsEstratoMedida:null,
            strEstadoActual:null,
            strDEstadoFacturacion:null,
            strDCiclo:null,
            strDEstadoCliente:null
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
