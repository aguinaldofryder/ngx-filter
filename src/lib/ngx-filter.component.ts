import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FieldType } from './enums';
import { OperatorType } from './enums/operator-type';
import { FieldModel, FilterModel, OperatorModel } from './models';
import { ControlDefs } from './ngx-filter-control-defs';
import ngxFilterForm from './ngx-filter-form';
import { allOperators } from './ngx-filter-operators';
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
   * Enum com o nome dos controles do formulário
   */
  controlDefs = ControlDefs;

  fieldType = FieldType;

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


  constructor() {
    super();
  }

  ngOnInit() {
    this.addListenerField();
    this.setInitialField();
  }

  /**
   * Retorna o controle do valor do filtro
   */
  get controlValue(): FormControl {
    return this.form.get(this.controlDefs.VALUE) as FormControl;
  }


  /**
   * Retorna o tipo do campo selecionado
   */
  get fieldSelected(): FieldModel {
    return this.form.get(this.controlDefs.FIELD).value as FieldModel;
  }

  /**
   * Retorna o tipo do campo selecionado
   */
  get fieldTypeSelected(): FieldType {
    if (this.fieldSelected) {
      return this.fieldSelected.type;
    }
    return FieldType.STRING;
  }

  /**
   * Define os operadores para o campo selecionado
   */
  get operators() {
    let field: FieldModel = this.form.get(this.controlDefs.FIELD).value;
    if (field) {
      return allOperators.filter(item => item.types.includes(field.type));
    }
  }

  get operatorTypeSelected(): OperatorType {
    let field: OperatorModel = this.form.get(this.controlDefs.OPERATOR).value;
    return field ? field.name : OperatorType.EQUAL;
  }

  compareField(f1: FieldModel, f2: FieldModel) {
    return f1.name === f1.name;
  }

  /**
   * Adiciona um filtro a lista
   */
  async onAddFilter() {
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
    this.form.get(this.controlDefs.FIELD).valueChanges.subscribe(() => {
      this.setInitialOperator()
      this.form.get(this.controlDefs.VALUE).reset();
    });
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
    if (this.operators) {
      this.form.get(this.controlDefs.OPERATOR).setValue(this.operators[0]);
    }
  }


}
