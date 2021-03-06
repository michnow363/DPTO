import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";
import  Bio  from "./blocks/bio";
import Dat from "./blocks/data";
import Timeline from "./blocks/cv_data";

import './App.scss';

const myDetails = {
  experience: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ],
  education: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ]
}

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                {
                  <Dat data = "18.02.2018" adres = "ulica" tel = "123456789" mail = "la@malpaWeMgle.com"></Dat>
                }
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            <Bio text = "Kreatywny tekst"> Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu Wiecej kreatywnego tekstu baaaardzo duzo kreatywnego kodu tak duzo kreatywnego kodu i tekstu ze no duzo po prostu</Bio>
            <Timeline items = {myDetails.experience}></Timeline>
            <Timeline items = {myDetails.education}></Timeline>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
