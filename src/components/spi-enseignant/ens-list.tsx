import { Component, State } from '@stencil/core';
import { Enseignant } from '../../global/Enseignant';


@Component({
    tag: 'ens-list',
    styleUrl: 'ens-list.scss'
})
export class ListCard {

    @State() enseignants: Enseignant[];

    componentWillLoad() {
        return fetch("https://api-dosispi.cleverapps.io/enseignants")
            .then(response => response.json())
            .then(AllEns => {
                this.enseignants = AllEns;
                console.log(this.enseignants);
            });
    }
    render() {
        if (this.enseignants != null) {
            return (
                <div class="c1">
                             <div class="columns">
                              <div class="columns is-desktop is-multiline">
                              {
                        this.enseignants.map((item) => {
                            return (
                                <div class="card is-shady">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                            {item.nom}{" "}{item.prenom}
                                        </p>
                                    </header>
                                    <div class="card-image">
                                    <figure class="image is-4by3">
                                         <img src="../../assets/ens.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                                    </figure>
                                     </div>
                                    <div class="card-content">
                                        <div class="content">
                                            <span>{item.type}</span>                                         
                                        </div>
                                        <footer class="card-footer">
                                        <span class="card-footer-item"> 
                                        <stencil-route-link url={'/ensDetails/' + item.noEnseignant}>
                                                    <a class="button is-rounded is-shady  is-primary ">Details</a>
                                                </stencil-route-link>
                                                </span>
                                        </footer>
                                    </div> 
                                </div>
                            )
                        }
                        )
                    }
                </div> </div>
                             </div>
            );
        }
        else {
            return ("couldn't render the data ");

        }
    }

}
