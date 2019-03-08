import { Component, State } from '@stencil/core';



@Component({
    tag: 'ens-find',
    styleUrl: 'ens-find.scss'
})


export class EnsFind {

    @State() enseignant: any = "";

    Email: HTMLInputElement;


    getens() {
        let url = 'http://dosispi.cleverapps.io/enseignants/emailUbo/'
        let email = this.Email.value;
        return fetch(url + email, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.enseignant = data;
            });
    }


    render() {
        if (this.enseignant == "") {
            return (
                <div class="c1">
                    <div id="flow">
                        <span class="flow-1"></span>
                        <span class="flow-2"></span>
                        <span class="flow-3"></span>
                    </div>

                    <div class="box">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input has-text-centered" type="search" ref={(el: HTMLInputElement) => this.Email = el} placeholder="email de l'enseignant" />
                            </div>
                            <div class="control">
                                <a class="button is-info" onClick={() => this.getens()}>Search</a>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
        else {
            return (
                <div>

                    <div class="card column is-half is-offset-one-quarter is-shady ">
                        <div class="hero is-primary">
                            <header class="card-header ">

                                <p class="card-header-title has-text-white-bis ">

                                    {this.enseignant.nom} {" "}{this.enseignant.prenom}

                                </p>

                            </header>
                        </div>
                        <div class="card-content">
                            <div class="content is-size-5">
                                <span class="has-text-primary">
                                    <i class="fas fa-mobile-alt"></i>
                                </span>{" "}
                                {this.enseignant.mobile}
                                <br></br>
                                <span class="has-text-primary">
                                    <i class="fas fa-phone-square"></i>
                                </span>{" "}
                                {this.enseignant.telephone}
                                <br></br>
                                <span class="has-text-primary">
                                    <i class="fas fa-at"></i>
                                </span>{" "}
                                {this.enseignant.emailPerso}
                                <br></br>
                                <span class="has-text-primary">
                                    <i class="fas fa-at"></i>
                                </span>{" "}
                                {this.enseignant.emailUbo}
                                <br></br>


                                <span class="has-text-primary">
                                    <i class="fas fa-map-marked-alt"></i>
                                </span>{" "}
                                {this.enseignant.adresse} {" "}{this.enseignant.codePostal} {" "}{this.enseignant.ville}{" "}{this.enseignant.pays}

                                <br></br>
                            </div>
                        </div>
                        <footer class="card-footer">
                        

                            <span class="card-footer-item ">
                            <div class="buttons has-addons is-right">
                                <stencil-route-link url='/' >
                                    <a class="button  is-rounded is-shady  is-primary ">Retour</a>
                                </stencil-route-link>
                            </div>
                            </span>


                        </footer>
                    </div>

                </div>



            )
        }
    }
}