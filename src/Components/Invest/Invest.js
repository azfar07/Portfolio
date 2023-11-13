import React from "react";
import InvestCard from "./InvestCard";

function Invest() {
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="flex justify-center w-full mb-4">
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
      </div>
      <div className="flex justify-center w-full mb-4">
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
        <InvestCard
          img="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Purus Ullamcorper Inceptos Nibh"
          desc="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
          price="45,00"
          currency="€"
          duration="3 Tage"
          discount="Ermäßigung mit Karte"
          ratings={4}
        />
      </div>
    </div>
  );
}

export default Invest;
