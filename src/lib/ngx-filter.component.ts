import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldType } from './enums';
import { FieldModel, OperatorModel, FilterModel } from './models';
import { ControlDefs } from './ngx-filter-control-defs';
import ngxFilterForm from './ngx-filter-form';
import { NgxFilterUtil } from './ngx-filter-util';


@Component({
  selector: 'ngx-filter',
  templateUrl: 'ngx-filter.component.html',
  styleUrls: ['ngx-filter.component.scss']
})
export class NgxFilterComponent extends NgxFilterUtil implements OnInit {

  /**
   * Atributos disponíveis para filtro
   */
  @Input() fields: FieldModel[] = [];

  @Output() filter: EventEmitter<FilterModel[]> = new EventEmitter();

  /**
   * Operadores disponíveis para o campo selecionado
   */
  operators: OperatorModel[] = [];

  /**
   * Enum com o nome dos controles do formulário
   */
  controlDefs = ControlDefs;

  /**
   * Lista de filtros informados pelo usuário
   */
  filters: FilterModel[] = [];

  /**
   * Validador do formulário
   */
  form: FormGroup = ngxFilterForm;

  /**
   * Lista de operadores disponíveis
   */
  allOperators: OperatorModel[] = [
    {
      label: 'É igual a',
      name: '=',
      types: [FieldType.COMBO, FieldType.DATE, FieldType.ENUM, FieldType.NUMBER, FieldType.STRING]
    },
    {
      label: 'É maior ou igual a',
      name: '>=',
      types: [FieldType.DATE, FieldType.NUMBER]
    }
  ]

  constructor() {
    super();
  }

  ngOnInit() {
    this.addListenerField();
    this.setInitialField();
  }

  compareField(f1: FieldModel, f2: FieldModel) {
    return f1.name === f1.name;
  }

  /**
   * Adiciona um filtro a lista
   */
  onAddFilter() {
    if (this.isValid(this.form)) {
      let filter = this.form.getRawValue();
      this.filters.push(filter);
      this.reset();
    }
  }

  /**
   * Aplica o filtro
   */
  async onFilter() {
    await this.onAddFilter();
    this.filter.emit(this.filters);
  }

  /**
   * Ouve evento do Enter no campo valor
   */
  onKeyUpValue(event) {
    if(event.key === 'Enter') {
      this.onFilter();
    }
  }

  /**
   * Remove o filtro da lista
   * @param filter 
   */
  onRemove(filter: FilterModel) {
    this.filters.splice(this.getIndexFilter(filter), 1);
  }


  validate(controlName: string) {
    let control = this.form.get(controlName);
    return !!control.errors && control.touched;
  }

  /**
   * Ouvinte das alterações no filtro selecionado
   */
  private addListenerField() {
    this.form.get(this.controlDefs.FIELD).valueChanges.subscribe(() => this.setOperators());
  }

  /**
   * Retorna o índice do filtro
   * @param filter 
   */
  private getIndexFilter(filter: FilterModel) {
    return this.filters.indexOf(filter);
  }

  /**
   * Limpa o formulário
   */
  private reset() {
    this.form.reset();
    this.setInitialField();
  }


  /**
   * Seleciona o primeiro filtro no combobox
   */
  private setInitialField() {
    this.form.get(this.controlDefs.FIELD).setValue(this.fields[0]);
  }

  /**
   * Seleciona o primeiro operador no combobox
   */
  private setInitialOperator() {
    this.form.get(this.controlDefs.OPERATOR).setValue(this.operators[0]);
  }

  /**
   * Define os operadores para o campo selecionado
   */
  private setOperators() {
    let field: FieldModel = this.form.get(this.controlDefs.FIELD).value;
    if (field) {
      this.operators = this.allOperators.filter(item => item.types.includes(field.type));
      this.setInitialOperator();
    } else {
      this.operators.splice(0, this.operators.length);
    }
  }

}
