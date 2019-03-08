import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Enseignant } from '../../global/Enseignant';


@Component({
    tag: 'ens-add',
    styleUrl: 'ens-add.scss'
})
export class EnsAdd {

    @Prop() match: MatchResults;
    @State() enseignant: Enseignant;

   // noEnseignant: HTMLInputElement;
    adresse: HTMLInputElement;
    codePostal: HTMLInputElement;
    emailPerso: HTMLInputElement;
    emailUbo: HTMLInputElement;
    mobile: HTMLInputElement;
    nom: HTMLInputElement;
    pays: HTMLInputElement;
    prenom: HTMLInputElement;
    sexe: HTMLInputElement;
    telephone: HTMLInputElement;
    type: HTMLInputElement;
    ville: HTMLInputElement;


    back() {
        alert("ajout d'un nouveau enseignant");
        window.location.replace("/ensList"); // or we can use RouterHistory
    }

    Senddata() {
        return fetch('http://dosispi.cleverapps.io/enseignants', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //noEnseignant: this.noEnseignant.value,
                adresse: this.adresse.value,
                codePostal: this.codePostal.value,
                emailPerso: this.emailPerso.value,
                emailUbo: this.emailUbo.value,
                mobile: this.mobile.value,
                nom: this.nom.value,
                pays: this.prenom.value,
                prenom: this.prenom.value,
                sexe: this.sexe.value,
                telephone: this.sexe.value,
                type: this.type.value,
                ville: this.ville.value
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.back();
                return responseJson.enseignants;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleSubmit = (ev: Event) => {
        ev.preventDefault();
        this.Senddata();
    }

    render() {
        return (
            <div class="form">
             <form onSubmit={this.handleSubmit}>
                <div class="field is-horizontal ">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">Nom</label>
                        </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control ">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.nom = e} placeholder="nom" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">Prenom</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.prenom = e} placeholder="prenom" required />
                            </div>
                        </div>
                    </div>
                </div>
              {/*   <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label has-text-white-ter">Numéro </label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.noEnseignant= e} placeholder="numero de l'enseignant" required />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class=" label is-family-monospace has-text-white-bis">Type</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.type = e} placeholder="type" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">Email personnel</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control ">
                            <input class="input is-primary" type="email" ref={(e: HTMLInputElement) => this.emailPerso = e}  placeholder="Email@" required />
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">Email ubo</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control ">
                            <input class="input is-primary" type="email" ref={(e: HTMLInputElement) => this.emailUbo = e}  placeholder="Email@" required />
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label  is-family-monospace has-text-white-bis">Mobile</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control ">
                            <input class="input is-primary" type="tel" ref={(e: HTMLInputElement) => this.mobile = e}  placeholder="your mobile phone number" required />
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">telephone</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control ">
                            <input class="input  is-primary" type="tel" ref={(e: HTMLInputElement) => this.telephone = e}  placeholder="your phone number " />
                           
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                    <div class="hero is-primary is-small">
                        <label class="label is-family-monospace has-text-white-bis">Sexe</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control ">
                            <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.sexe = e}  placeholder="ex: F" />
                           
                            </div>
                        </div>
                    </div>
                </div>


                <div class="field is-horizontal">
                    <div class="field-label is-normal">

                    <div class="hero is-primary is-small">
                        <label class=" label is-family-monospace has-text-white-bis">Adresse</label>
                    </div>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.adresse = e} placeholder="adresse" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.codePostal = e} placeholder="Code postale" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.ville = e} placeholder="ville" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control ">
                                <input class="input is-primary" type="text" ref={(e: HTMLInputElement) => this.pays = e} placeholder="pays" />

                            </p>
                        </div>

                    </div>
                </div>
 
                        <div class="field is-grouped is-grouped-right">
                            <div class="control">
                                <button class="button is-link">Submit</button>
                            </div>
                            <div class="control">
                            <stencil-route-link url='/' >
                                    <button class="button is-text">Cancel</button>
                                </stencil-route-link>
                            
                            </div>
                        </div>
                       </form> 
                    </div>

                    );
                  }
                }
                
