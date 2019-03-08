import { Component } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {
  render() {
    return (
      <div class="spi-home">
        <div class="container is-large has-text-centered">
        <section class="hero is-primary">
          <div class="hero-body">
            <p class="title">
              Documentation
            </p>
            <p class="subtitle">
              Bienvenu sur notre page web <strong>Veuillez utiliser le menu pour faire vos recherches et consultations</strong>
            </p>
          </div>
        </section>
        </div>
       
      </div>
      

    );
  }
}
