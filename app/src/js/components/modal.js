export class Modal {
  constructor() {
    this.attribute = 'data-modal-target';
    this.btns = document.querySelectorAll("[" + this.attribute + "]");
    this.classVisible = 'is-visible';
    this.modal = null;

    this.bindAction();
  }

  bindAction() {
    for (var i = 0; i < this.btns.length; i++) {
      this.btns[i]
        .addEventListener('click', (event) => this.selectAction(event));
    }
  }

  selectAction(event) {
    this.setModal(event);

    if (this.modal.classList.contains(this.classVisible)) {
      this.close();
    } else {
      this.open();
    }
  }

  setModal(event) {
    let element = event.target;
    let attribute = element.getAttribute(this.attribute);
    let modal = document.querySelector('#' + attribute);

    this.modal = modal;
  }

  open() {
    this.modal.classList.add(this.classVisible);
  }

  close() {
    this.modal.classList.remove(this.classVisible);
  }
}