import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo-hb.png'
import Select from "react-select";

const diety = [1300, 1600, 1800, 2000, 2300, 2800]
const regex = new RegExp(/^([1-9]|[0-9][.][0-9]|[1-9][.]|[1-9][.][0-9][0-9]|[1-9][0-9]|[1-9][0-9][.][0-9]|[1-9][0-9][0-9][.]|[1][0-9][0-9]|[1-9][0-9][.][0-9][0-9]|[1-9][1-9][.][0-9][0-9]|[1][0-9][0-9][.][0-9]|[1][0-9][0-9][.][0-9][0-9]|20[0-0])$/)

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            plec: {value: -161, label: 'Kobieta'},
            wzrost: '',
            waga: '',
            wiek: '',
            cel: {value: 0, label: 'Redukcja'},
            aktywnosc: {value: 0, label: 'Niska'},
            wynik: '',
            dieta: '',
            uzupelnijDane: false
        }

        this.changePlec = this.changePlec.bind(this)
        this.changeWzrost = this.changeWzrost.bind(this)
        this.changeWiek = this.changeWiek.bind(this)
        this.changeWaga = this.changeWaga.bind(this)
        this.changeCel = this.changeCel.bind(this)
        this.changeAktywnosc = this.changeAktywnosc.bind(this)
    }

    changePlec(e) {
        this.setState({plec: e})
    }

    changeWzrost(e) {
        if (regex.test(e.target.value) || e.target.value === "") {
            this.setState({wzrost: e.target.value})
        }
    }

    changeWiek(e) {
        if (regex.test(e.target.value) || e.target.value === "") {
            this.setState({wiek: e.target.value})
        }
    }

    changeWaga(e) {
        if (regex.test(e.target.value) || e.target.value === "") {
            this.setState({waga: e.target.value})
        }
    }

    changeCel(e) {
        this.setState({cel: e})
    }

    changeAktywnosc(e) {
        this.setState({aktywnosc: e})
    }

    obliczZapotrzebowanie() {
        const {plec, wzrost, waga, wiek, cel, aktywnosc} = this.state

        if (Boolean(wzrost) && Boolean(waga) && Boolean(wiek)) {
            let wynik = (wzrost * 6.25) + (waga * 9.99) - (wiek * 4.92)

            wynik += plec.value
            wynik += cel.value
            wynik += aktywnosc.value
            wynik = Math.ceil(wynik / 10) * 10

            let dieta = this.najblizszaDieta(wynik)

            this.setState({wynik: wynik + ' kcal', dieta: dieta, uzupelnijDane: false})
        } else {
            this.setState({uzupelnijDane: true})
        }
    }

    najblizszaDieta(wynik) {
        let closest = null;
        if (this.state.cel.label === 'Utrzymanie wagi'){
            for (let i=0; i<diety.length; i++){
                if (wynik < diety[i]){
                    closest = diety[i-1];
                    break;
                }
            }
        } else {
            closest = diety.reduce((prev, curr) => {
                return (Math.abs(curr - wynik) < Math.abs(prev - wynik) ? curr : prev);
            });
        }

        console.log(closest)

        switch (closest) {
            case 1300:
                return closest + ' kcal BASIC / WEGE';
            case 1600:
                return closest + ' kcal BASIC / WEGE';
            case 1800:
                return closest + ' kcal BASIC / WEGE / GYM';
            case 2000:
                return closest + ' kcal BASIC / WEGE';
            case 2300:
                return closest + ' kcal BASIC / WEGE';
            case 2800:
                return closest + ' kcal GYM';
        }
    }

    render() {

        const {plec, wzrost, waga, wiek, cel, aktywnosc, wynik, dieta, uzupelnijDane} = this.state

        return <div className="main">
            <div className="logo">
                <img src={logo} className={'img-fluid'}/>
            </div>
            <div className="bmr-calc">

                <label>Płeć:</label>
                <Select
                    onChange={this.changePlec}
                    defaultValue={plec}
                    options={[
                        {value: -161, label: 'Kobieta'},
                        {value: 5, label: 'Mężczyzna'},
                    ]}
                />

                <label>Wiek:</label>
                <input className={'form-control'} value={wiek} onChange={this.changeWiek}/>

                <label>Waga:</label>
                <input className={'form-control'} value={waga} onChange={this.changeWaga}/>

                <label>Wzrost:</label>
                <input className={'form-control'} value={wzrost} onChange={this.changeWzrost}/>

                <label>Aktywność fizyczna:</label>
                <Select
                    onChange={this.changeAktywnosc}
                    defaultValue={aktywnosc}
                    options={[
                        {value: 0, label: 'Niska'},
                        {value: 300, label: 'Średnia'},
                        {value: 600, label: 'Wysoka'},
                    ]}
                />

                <label>Cel:</label>
                <Select
                    onChange={this.changeCel}
                    defaultValue={cel}
                    options={[
                        {value: 0, label: 'Redukcja'},
                        {value: 300, label: 'Utrzymanie wagi'},
                        {value: 600, label: 'Masa'},
                    ]}
                />

                <div>
                    <button className={'btn btn-info'} onClick={() => this.obliczZapotrzebowanie()}>Oblicz
                        zapotrzebowanie
                    </button>
                    {uzupelnijDane ? <div className={'uzupelnijDane'}>Uzupełnij dane</div> :
                        <>
                            <div className={'wynik'}>{wynik !== '' ?
                                <div>Twoje zapotrzebowanie to: <div className={'font-weight-bolder'}>{wynik}</div>
                                </div> : null}</div>
                            <div className={'dieta'}>{dieta !== '' ?
                                <div>Proponowana dieta: <div className={'font-weight-bolder'}>{dieta}</div>
                                </div> : null}</div>
                            <div>
                                <small>Wyliczenia z powyższego kalkulatora są wyliczeniami orientacyjnymi, nie należy na nich bazować w 100%.</small>
                            </div>
                        </>}
                </div>

            </div>
        </div>
    }

}
