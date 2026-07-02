// DRAFT — to be reviewed by FRD.
// Each stance is a short, first-person paragraph in Italian (default) and English.
export interface Stance {
  id: string;
  tag: { it: string; en: string };
  title: { it: string; en: string };
  body: { it: string; en: string };
}

export const stances: Stance[] = [
  {
    id: 'democrazia-europea',
    tag: { it: 'Democrazia europea', en: 'European democracy' },
    title: {
      it: 'Una vera democrazia europea, con liste transnazionali.',
      en: 'A real European democracy, with transnational lists.',
    },
    body: {
      it: 'L’Europa non sarà mai politica finché continueremo a votarla come fosse una somma di elezioni nazionali. Servono liste transnazionali, una legge elettorale unica, voto a 16 anni e parità di genere obbligatoria nelle liste. Solo così il Parlamento europeo diventerà il luogo dove si decide davvero, e gli elettori potranno chiedere conto di scelte comuni.',
      en: 'Europe will never be truly political as long as we vote for it like a sum of national elections. We need transnational lists, a single electoral law, voting at 16 and mandatory gender parity in lists. Only then will the European Parliament become the place where decisions are really made, and only then will voters be able to hold common choices to account.',
    },
  },
  {
    id: 'clima',
    tag: { it: 'Clima', en: 'Climate' },
    title: {
      it: 'Giustizia climatica e giustizia sociale sono la stessa cosa.',
      en: 'Climate justice and social justice are the same thing.',
    },
    body: {
      it: 'La crisi climatica non è un capitolo separato dalla disuguaglianza: la peggiora. Difendo chi protesta — Fridays for Future, Extinction Rebellion, attivisti di disobbedienza civile — perché stanno facendo il lavoro che la politica europea, per troppo tempo, ha rimandato. Servono azioni più rapide, ambiziose e fondate sulla scienza, e un patto sociale che protegga chi sta pagando di più la transizione.',
      en: 'The climate crisis is not a chapter separate from inequality: it deepens it. I stand with those who protest — Fridays for Future, Extinction Rebellion, civil-disobedience activists — because they are doing the work European politics has put off for too long. We need faster, more ambitious, science-based action, and a social pact that protects those paying the highest price for the transition.',
    },
  },
  {
    id: 'asilo-migrazione',
    tag: { it: 'Asilo e migrazione', en: 'Asylum & migration' },
    title: {
      it: 'Politiche di asilo basate sui trattati e sulla dignità umana.',
      en: 'Asylum policies grounded in treaties and human dignity.',
    },
    body: {
      it: 'Servono procedure di asilo armonizzate, un sistema europeo di ricerca e soccorso e investimenti veri sull’accoglienza e sull’integrazione. Non si può continuare a esternalizzare le frontiere come ha fatto il governo italiano con l’Albania: a Gjader ho visto da vicino cosa significa. La risposta umanitaria è anche una risposta politica.',
      en: 'We need harmonised asylum procedures, a European search-and-rescue system and real investment in reception and integration. We cannot keep outsourcing borders, as the Italian government has done with Albania: I saw at first hand what that means in Gjader. The humanitarian answer is also a political one.',
    },
  },
  {
    id: 'fisco-disuguaglianze',
    tag: { it: 'Fisco e disuguaglianze', en: 'Tax & inequality' },
    title: {
      it: 'Una vera giustizia fiscale europea per ridurre le disuguaglianze.',
      en: 'A real European tax justice to reduce inequality.',
    },
    body: {
      it: 'Una progressività seria, un salario minimo europeo, un’aliquota minima effettiva sulle multinazionali, e armonizzazione fiscale tra Stati membri. Senza questi pezzi, il mercato unico continua a scaricare le diseguaglianze sui cittadini e a premiare chi sa muovere meglio i capitali — non chi crea valore.',
      en: 'Real progressivity, a European minimum wage, an effective minimum tax rate on multinationals, and fiscal harmonisation across member states. Without these pieces, the single market keeps pushing inequality onto citizens and rewarding those who move capital best — not those who create value.',
    },
  },
  {
    id: 'ucraina-pace',
    tag: { it: 'Ucraina, Gaza, pace', en: 'Ukraine, Gaza, peace' },
    title: {
      it: 'Stare con chi resiste, non smettere di chiedere la pace.',
      en: 'Stand with those who resist, never stop asking for peace.',
    },
    body: {
      it: 'L’Ucraina deve poter resistere all’invasione russa, e l’ingresso nell’Unione va accelerato. A Gaza serve un cessate il fuoco immediato e occorre chiamare le cose con il loro nome: gli indicatori di un possibile genocidio non possono essere ignorati. Pace non significa equidistanza, significa coerenza con i diritti umani.',
      en: 'Ukraine must be able to resist the Russian invasion, and its EU accession must be accelerated. In Gaza, an immediate ceasefire is needed and we must call things by their name: indicators of a potential genocide cannot be ignored. Peace is not equidistance — it is consistency with human rights.',
    },
  },
  {
    id: 'partecipazione',
    tag: { it: 'Partecipazione', en: 'Participation' },
    title: {
      it: 'La politica si fa con le persone, non per le persone.',
      en: 'Politics is done with people, not for them.',
    },
    body: {
      it: 'Le grandi trasformazioni di cui abbiamo bisogno richiedono cittadinanza attiva, organizzazione comunitaria, spazi politici aperti. Per questo continuo a fare formazione, a costruire reti tra organizzazioni, a portare il community organising in luoghi dove non è ancora arrivato. L’antidoto alla disaffezione è invitare le persone dentro, non rassicurarle dall’esterno.',
      en: 'The big transformations we need require active citizenship, community organising and open political spaces. That is why I keep training, building networks across organisations, and bringing community organising to places where it hasn’t arrived yet. The antidote to disaffection is bringing people in, not reassuring them from outside.',
    },
  },
];
