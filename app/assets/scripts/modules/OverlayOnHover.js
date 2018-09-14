import $ from 'jquery';

class OverlayOnHover {
  constructor() {

    this.btnMain = $(".btn");
    this.btnOverlay = $(".btn-overlay");
    this.events();
  }

  events() {
    this.btnMain.mouseenter(this.createOverlay.bind(this));
    this.btnMain.mouseleave(this.removeOverlay.bind(this));

  }


  createOverlay() {
    this.btnOverlay.addClass("btn-overlay-change");
  }

removeOverlay() {
  this.btnOverlay.removeClass("btn-overlay-change");

}
}
export default OverlayOnHover;
