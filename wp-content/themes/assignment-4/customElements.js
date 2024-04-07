class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
class TwoSidedMarkets extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="sewing-guide">Sewing Guide</a>&nbsp;<a href="products">Products</a>`;
  }
}

customElements.define('x-twosided', TwoSidedMarkets);
