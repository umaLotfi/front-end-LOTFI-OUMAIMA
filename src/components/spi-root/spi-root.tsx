import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/ensList" component="ens-list" />
              <stencil-route url="/ensDetails/:id" component="ens-details" />
              <stencil-route url="/AddEns" component="ens-add" />
              <stencil-route url="/FindEns" component="ens-find" />
              <stencil-route url="/deleteEns/:id" component="ens-delete" />
              <stencil-route url="/formList" component="form-list" />
              <stencil-route url="/formDetails/:id" component="form-details" />
              
              
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
