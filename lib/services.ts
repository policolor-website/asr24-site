export type CoverItem = {
  title: string;
  desc: string;
};

export type ScenarioItem = {
  title: string;
  desc: string;
};

export type StepItem = {
  title: string;
  desc: string;
};

export type Service = {
  slug: string;
  menu: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  covers: CoverItem[];
  scenarios: ScenarioItem[];
  steps: StepItem[];
  notCovered: string[];
  conditions: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "tractare-auto",
    menu: "Tractare Auto",
    title: "Tractare Auto",
    tagline:
      "Mașina imobilizată pe drumul public? O preluăm și o ducem în siguranță la service.",
    image: "/img/truck-rulota.jpg",
    imageAlt: "Autospecială ASR24 tractând o rulotă",
    paragraphs: [
      "Tractarea este serviciul de bază al ASR24: transportul vehiculului imobilizat — ca urmare a unei defecțiuni tehnice sau a unui accident — de pe drumul public către destinația stabilită împreună cu dispeceratul.",
      "Operațiunea este executată integral de echipa de intervenție: preluarea autoturismului, încărcarea pe platforma autospecialei, transportul și descărcarea la destinație, în deplină siguranță, de personal specializat în transportul de vehicule.",
      "Destinația standard este cel mai apropiat service autorizat ASR24, unde mașina poate fi reparată. Tractarea se organizează ori de câte ori depanarea nu poate fi realizată la fața locului — decizia o ia dispeceratul împreună cu echipa din teren.",
      "Serviciul este disponibil atât pentru membrii ASR24 (în limita kilometrilor incluși în card), cât și contra cost, pentru orice șofer blocat pe drumurile publice din județul Argeș.",
    ],
    covers: [
      {
        title: "Defecțiune tehnică",
        desc: "Motor, cutie de viteze, suspensie, electrică, sistem de frânare — orice defecțiune care lasă mașina imobilizată pe drumul public.",
      },
      {
        title: "Accident în trafic",
        desc: "Vehiculul avariat care nu se mai poate deplasa singur este preluat de la locul evenimentului și transportat la service.",
      },
      {
        title: "Preluare și încărcare",
        desc: "Echipa de intervenție se ocupă integral de operațiuni — poziționare, ancorare și încărcare pe platforma autospecialei.",
      },
      {
        title: "Transport dedicat",
        desc: "Transport cu autospecială construită pentru vehicule, pe ruta stabilită de dispecerat, în siguranță.",
      },
      {
        title: "Descărcare și predare",
        desc: "Mașina este descărcată și predată la destinație — service autorizat sau adresa stabilită cu clientul.",
      },
      {
        title: "Vehicule noi sau avariate",
        desc: "Transportăm autoturisme în orice stare: noi, defecte sau avariate, în limitele de eligibilitate.",
      },
    ],
    scenarios: [
      {
        title: "Mașina nu mai pornește deloc",
        desc: "Ai rămas pe stradă sau în parcare și motorul nu reacționează — echipa verifică dacă se poate depana pe loc, iar dacă nu, tractează.",
      },
      {
        title: "Ai fost implicat într-un accident",
        desc: "Vehiculul avariat nu mai poate circula — ASR24 îl preia de la locul evenimentului și îl duce la service.",
      },
      {
        title: "Defecțiune în mers",
        desc: "Temperatura a sărit în roșu, cutia s-a blocat, motorul s-a oprit în trafic — oprești în siguranță și suni dispeceratul.",
      },
      {
        title: "Mașina trebuie mutată la service",
        desc: "Vehiculul e funcțional dar nu poate circula legal sau sigur — îl transportăm pe platformă.",
      },
    ],
    steps: [
      {
        title: "Suni dispeceratul",
        desc: "0767 39 39 39 — disponibil non-stop. Spui unde ești și ce s-a întâmplat.",
      },
      {
        title: "Evaluăm situația",
        desc: "Dispeceratul stabilește dacă problema se poate remedia la fața locului sau e nevoie de tractare.",
      },
      {
        title: "Autospeciala ajunge la tine",
        desc: "Cea mai apropiată echipă din județul Argeș se deplasează la locul evenimentului.",
      },
      {
        title: "Preluăm și transportăm",
        desc: "Încărcare, ancorare, transport și predare la destinație — în siguranță, fără efort din partea ta.",
      },
    ],
    notCovered: [
      "Reparația propriu-zisă în service — plătită de client direct în atelier",
      "Piesele de schimb necesare remedierii",
      "Kilometrii care depășesc limita inclusă în card — achitați direct tractatorului",
    ],
    conditions: [
      "Tractarea se organizează când depanarea nu se poate realiza la fața locului",
      "Distanța acoperită depinde de cardul deținut; pentru intervenții contra cost, tariful se comunică înainte de plecarea autospecialei",
      "Vehicule eligibile: autoturisme până la 3,0 t, maximum 5,5 m lungime și 2 m înălțime",
      "Serviciul este valabil pe drumurile publice din județul Argeș",
      "Cardul de membru devine activ la 24 de ore de la activare",
    ],
  },
  {
    slug: "recuperare-vehicul",
    menu: "Recuperare Vehicul",
    title: "Serviciu de Recuperare",
    tagline:
      "Mașina în șanț, răsturnată sau în afara drumului? O aducem înapoi pe carosabil.",
    image: "/img/fleet-2.jpg",
    imageAlt: "Autospeciale ASR24 în teren",
    paragraphs: [
      "Recuperarea este operațiunea prin care un autovehicul aflat în afara drumului, în șanț, răsturnat sau în orice poziție din care nu se mai poate deplasa singur este adus înapoi pe carosabil.",
      "ASR24 organizează operațiunea de recuperare cu autospeciale echipate corespunzător — echipament de ridicare și tragere, operat de personal cu experiență în recuperarea vehiculelor din poziții greu accesibile.",
      "Scopul este readucerea vehiculului pe drum, în siguranță, cu avarii minime. Odată pe carosabil, dacă vehiculul nu poate circula, operațiunea continuă natural cu tractarea către service.",
    ],
    covers: [
      {
        title: "Vehicul în șanț sau afara drumului",
        desc: "Autoturism ieșit de pe carosabil — în șanț, pe marginea drumului sau pe teren adiacent.",
      },
      {
        title: "Vehicul răsturnat",
        desc: "Recuperarea autoturismului ajuns pe lateral sau cu roțile în sus, cu echipament dedicat de ridicare.",
      },
      {
        title: "Readucere pe carosabil",
        desc: "Operațiunea se încheie când vehiculul este stabil, pe drum, pregătit să plece sau să fie tractat.",
      },
      {
        title: "Continuare cu tractare",
        desc: "Dacă după recuperare vehiculul nu poate circula, intervenția se transformă în tractare către service.",
      },
    ],
    scenarios: [
      {
        title: "Ai alunecat în șanț",
        desc: "Pe ploaie, zăpadă sau la evitarea unui obstacol — vehiculul e întreg, dar nu mai poate ieși singur.",
      },
      {
        title: "Mașina s-a răsturnat după impact",
        desc: "Cea mai delicată situație — echipa stabilizează și ridică vehiculul fără avarii suplimentare.",
      },
      {
        title: "Blocat în zăpadă sau noroi",
        desc: "Drumuri necurățate sau teren moale — vehiculul e sănătos, dar roțile nu au aderență.",
      },
      {
        title: "Căzut de pe pod sau podeț",
        desc: "Situații complexe în care vehiculul a părăsit complet drumul — evaluare și intervenție planificată.",
      },
    ],
    steps: [
      {
        title: "Suni și descrii poziția",
        desc: "Dispeceratul are nevoie de detalii: în șanț, răsturnată, accesibilitatea locului.",
      },
      {
        title: "Plecăm cu echipamentul potrivit",
        desc: "Tipul de recuperare decide ce autospecială și ce dotare se trimite în teren.",
      },
      {
        title: "Stabilizăm și recuperăm",
        desc: "Vehiculul este readus pe carosabil cu tehnică de tragere și ridicare controlată.",
      },
      {
        title: "Verificăm și continuăm",
        desc: "Dacă vehiculul poate circula pleci; dacă nu, îl tractăm către service.",
      },
    ],
    notCovered: [
      "Operațiuni de complexitate excepțională care depășesc cadrul standard — evaluate individual",
      "Reparația vehiculului după recuperare — aparține atelierului, nu echipei de intervenție",
      "Avarii suferite anterior intervenției noastre",
    ],
    conditions: [
      "Organizarea serviciului este gratuită sau contra cost, în funcție de cardul deținut",
      "Intervenția se desfășoară cu autospeciale echipate pentru recuperare",
      "Valabil pe drumurile publice și zonele accesibile din județul Argeș",
    ],
  },
  {
    slug: "depanare",
    menu: "Depanare",
    title: "Serviciu Depanare",
    tagline: "Reparăm la fața locului tot ce se poate repara.",
    image: "/img/interventie.jpg",
    imageAlt: "Intervenție ASR24 la fața locului",
    paragraphs: [
      "Depanarea este prima linie de intervenție ASR24: înainte de tractare, echipa încearcă să repare mașina acolo unde a rămas. Serviciul se prestează în regim de urgență, 24/7, la locul evenimentului.",
      "Echipa de intervenție diagnostică și remediază defecțiunile în limitele tehnice permise de dotarea autospecialei și de natura problemei — de la siguranțe și curele până la pornire și electrică.",
      "Dacă depanarea nu se poate realiza sau nu se încheie cu succes în timpul maxim de intervenție, serviciul se transformă automat în tractare către cel mai apropiat service autorizat — nu rămâi blocat.",
    ],
    covers: [
      {
        title: "Diagnostic la fața locului",
        desc: "Identificarea rapidă a defecțiunii direct pe drum, cu echipamentul autospecialei de intervenție.",
      },
      {
        title: "Reparații minore pe loc",
        desc: "Remedierea defecțiunilor care permit intervenție în teren: electrică, curele, furtunuri, siguranțe, pornire.",
      },
      {
        title: "Intervenție în regim de urgență",
        desc: "Serviciu disponibil 24/7 — zi, noapte, weekend, sărbători — pe drumurile publice din județ.",
      },
      {
        title: "Continuitate cu tractare",
        desc: "Dacă nu se poate repara pe loc în timpul de intervenție, serviciul se transformă în tractare.",
      },
    ],
    scenarios: [
      {
        title: "Motorul nu pornește",
        desc: "Electrovalvă, siguranță, contact imperfect — multe probleme de pornire se rezolvă la fața locului.",
      },
      {
        title: "Becul de ulei sau de motor aprins",
        desc: "Verificăm pe loc dacă e o eroare remediable sau o defecțiune care cere service.",
      },
      {
        title: "Curea de alternator întreruptă",
        desc: "Una dintre defecțiunile frecvente care imobilizează mașina în mers — evaluare și intervenție posibilă pe loc.",
      },
      {
        title: "Probleme electrice în trafic",
        desc: "Borne, contacte, siguranțe — defecțiuni mici care au consecințe mari, rezolvate fără tractare.",
      },
    ],
    steps: [
      {
        title: "Suni și descrii simptomele",
        desc: "Ce face mașina — sau ce nu mai face. Cu cât ești mai precis, cu atât sosim mai pregătiți.",
      },
      {
        title: "Ajunge echipa de intervenție",
        desc: "Autospeciala de depanare se deplasează la tine, dotată pentru reparații în teren.",
      },
      {
        title: "Diagnosticăm și reparăm",
        desc: "În limitele dotării și ale timpului de intervenție, mașina este repusă în stare de funcționare.",
      },
      {
        title: "Pleci sau tractăm",
        desc: "Rezolvat pe loc — continui drumul. Nerezolvat — serviciul devine tractare către service.",
      },
    ],
    notCovered: [
      "Reparații care depășesc posibilitățile tehnice ale unei intervenții în teren",
      "Piese de schimb — achiziția și montajul lor se realizează în service",
      "Defecțiuni care nu pot fi remediate fără echipament de atelier",
    ],
    conditions: [
      "Serviciul se oferă în limitele dotării mașinii de intervenție",
      "Natura defecțiunii poate impune tractarea, nu repararea pe loc",
      "Disponibil 24/7 pentru membri și contra cost pentru intervenții punctuale",
    ],
  },
  {
    slug: "start-baterie",
    menu: "Start Baterie",
    title: "Serviciu Start Baterie",
    tagline: "Baterie descărcată? Venim cu curent de pornire.",
    image: "/img/slide-tractare.jpg",
    imageAlt: "Autospecială ASR24 la intervenție",
    paragraphs: [
      "Cea mai frecventă cauză de imobilizare: acumulatorul descărcat. ASR24 organizează și asigură alimentarea cu curent de pornire și repunerea în stare de funcționare a bateriei autoturismului.",
      "Echipa de intervenție se deplasează la locul imobilizării și pornește vehiculul cu echipament profesional — sigur pentru electronica mașinii, spre deosebire de improvizațiile cu cabluri de la vehicule neadecvate.",
      "Serviciul acoperă costurile deplasării echipei la locul evenimentului și se oferă în limitele tehnice permise de dotarea autospecialei și de natura defecțiunii.",
    ],
    covers: [
      {
        title: "Curent de pornire",
        desc: "Alimentarea cu curent de pornire pentru acumulatorul descărcat, cu echipament dedicat și sigur.",
      },
      {
        title: "Repornire la fața locului",
        desc: "Obiectivul este să pleci pe propriile roți — verificăm dacă vehiculul funcționează după repornire.",
      },
      {
        title: "Deplasare echipă inclusă",
        desc: "Costul deplasării echipei de intervenție la locul imobilizării este acoperit de serviciu.",
      },
      {
        title: "Recomandare onestă",
        desc: "Dacă bateria e terminată sau există o defecțiune la încărcare, îți spunem exact ce urmează.",
      },
    ],
    scenarios: [
      {
        title: "Ai uitat luminile aprinse",
        desc: "Faruri sau lumini lăsate aprinse toată noaptea — clasica baterie descărcată de dimineață.",
      },
      {
        title: "Iernile grele",
        desc: "Frigul e cel mai dur test pentru un acumulator învechit — diminețile cu -10 grade cer ajutor.",
      },
      {
        title: "Mașina a stat prea mult",
        desc: "Săptămâni de necirculare descarcă orice acumulator — repornim vehiculul fără riscuri.",
      },
      {
        title: "Baterie veche, sfârșit de viață",
        desc: "O pornim pe loc ca să ajungi la service sau la magazin pentru înlocuire.",
      },
    ],
    steps: [
      {
        title: "Suni dispeceratul",
        desc: "Descrii simptomele: motorul nu se învârte, bornele bat, bordul nu se aprinde.",
      },
      {
        title: "Sosim cu echipamentul",
        desc: "Autospeciala de intervenție ajunge cu aparat de pornire profesional.",
      },
      {
        title: "Repornim vehiculul",
        desc: "Alimentare cu curent de pornire și verificarea funcționării mașinii.",
      },
      {
        title: "Verdict final",
        desc: "Mașina merge — pleci. Bateria e moartă sau e altă defecțiune — serviciul devine tractare.",
      },
    ],
    notCovered: [
      "Costul unei baterii noi — dacă înlocuirea este necesară, se face separat",
      "Reparația sistemului de încărcare (alternator, releu) — aparține service-ului",
      "Montajul bateriei noi — intervenție de atelier",
    ],
    conditions: [
      "Dacă nu se poate remedia la locul evenimentului, serviciul se transformă în tractare",
      "Valabil pentru autoturisme în limitele de eligibilitate ASR24",
      "Deplasarea echipei este acoperită pentru membri și tarifată pentru intervenții punctuale",
    ],
  },
  {
    slug: "pana-carburant",
    menu: "Pană Carburant",
    title: "Serviciu Pană de Carburant",
    tagline: "Ai rămas fără combustibil? Te ducem la cea mai apropiată stație.",
    image: "/img/slide-dispatch.jpg",
    imageAlt: "Intervenție ASR24 pe drum public",
    paragraphs: [
      "Rămas fără benzină, motorină sau curent? ASR24 tractează autoturismul imobilizat de lipsa combustibilului până la cea mai apropiată stație de alimentare — inclusiv stații de încărcare pentru vehicule electrice.",
      "Alimentare greșită cu combustibil — benzină într-un diesel sau invers — este o situație mai delicată: în acest caz vehiculul este tractat la cel mai apropiat service autorizat, unde rezervorul poate fi golit corect și alimentarea corectată fără daune la motor.",
      "Regula de bază rămâne aceeași: nu conduci mașina în această stare, mai ales după alimentare greșită — oprești motorul și suni dispeceratul.",
    ],
    covers: [
      {
        title: "Tractare la stație",
        desc: "Transportul vehiculului până la cea mai apropiată stație de combustibil — benzină sau motorină.",
      },
      {
        title: "Vehicule electrice",
        desc: "Mașini electrice cu autonomie epuizată — tractate până la cea mai apropiată stație de încărcare.",
      },
      {
        title: "Alimentare greșită",
        desc: "Combustibil greșit în rezervor — tractare la service autorizat pentru golire și realimentare corectă.",
      },
      {
        title: "Intervenție rapidă",
        desc: "Cea mai simplă intervenție — dar esențială atunci când ești departe de orice benzinărie.",
      },
    ],
    scenarios: [
      {
        title: "Rezerva s-a terminat între localități",
        desc: "Acele 30 km de autonomie au fost optimiste — mașina s-a oprit la distanță de orice stație.",
      },
      {
        title: "Ai pus benzină într-un diesel",
        desc: "Greșeala clasică de la pompă — motorul trebuie oprit imediat și mașina tractată la service.",
      },
      {
        title: "Motorină într-o benzină",
        desc: "Invers la fel de grav — nu porni motorul deloc dacă ai realizat greșeala la timp.",
      },
      {
        title: "Mașina electrică, baterie la zero",
        desc: "Autonomia afișată a fost optimistă — tractare până la cel mai apropiat punct de încărcare.",
      },
    ],
    steps: [
      {
        title: "Suni și spui ce combustibil ai",
        desc: "Benzină, motorină, electric — sau dacă ai alimentat greșit și la care stație.",
      },
      {
        title: "Evaluăm situația",
        desc: "Pana simplă = stație. Alimentare greșită = service. Dispeceratul stabilește destinația.",
      },
      {
        title: "Autospeciala te preia",
        desc: "Încărcăm vehiculul și îl transportăm la destinația corectă.",
      },
      {
        title: "Alimentezi și pleci",
        desc: "La stație — realimentezi și continui drumul. La service — remediezi în atelier.",
      },
    ],
    notCovered: [
      "Costul combustibilului — este suportat integral de client",
      "Intervenția din service pentru alimentare greșită (golire rezervor, curățare circuit)",
      "Eventuale daune ale motorului cauzate de combustibilul greșit",
    ],
    conditions: [
      "Tractarea se face la cea mai apropiată stație sau service autorizat",
      "Valabil pentru benzină, motorină și vehicule electrice",
      "Pentru alimentare greșită: nu porni motorul — costurile cresc exponential dacă circui",
    ],
  },
  {
    slug: "pana-cauciuc",
    menu: "Pană Cauciuc",
    title: "Serviciu Pană de Cauciuc",
    tagline: "Pană în trafic? Montăm rezerva sau te ducem la vulcanizare.",
    image: "/img/tractare-2.jpg",
    imageAlt: "Autospecială ASR24 în intervenție",
    paragraphs: [
      "Pana de cauciuc este una dintre cele mai frecvente intervenții: dacă autoturismul este dotat cu roată de rezervă, echipa de intervenție montează rezerva la fața locului și poți continua drumul.",
      "Dacă vehiculul nu are pneu de rezervă — din ce în ce mai des la mașinile moderne — sau pana nu poate fi remediată pe loc, autoturismul este tractat până la cel mai apropiat atelier unde problema poate fi rezolvată.",
      "O intervenție aparent simplă care, făcută corect, înseamnă diferența dintre câteva minute pierdute și orele petrecute pe marginea drumului.",
    ],
    covers: [
      {
        title: "Montaj roată de rezervă",
        desc: "Înlocuirea pneului avariat cu rezerva vehiculului, la fața locului, cu scule și tehnică corectă.",
      },
      {
        title: "Verificarea rezervei",
        desc: "Ne asigurăm că roata de rezervă e funcțională și corect presurizată înainte de montaj.",
      },
      {
        title: "Tractare la vulcanizare",
        desc: "Fără rezervă sau cu pană nereparabilă pe loc — transport până la cel mai apropiat atelier.",
      },
      {
        title: "Intervenție în siguranță",
        desc: "Schimbul de roată pe marginea drumului e periculos — echipa lucrează cu semnalizare corectă.",
      },
    ],
    scenarios: [
      {
        title: "Cauciuc tăiat pe bordură",
        desc: "Contactul violent cu o bordură sau groapă a secționat talonul — rezerva te salvează.",
      },
      {
        title: "Cui sau obiect în bandă",
        desc: "Dezumflare lentă sau instantanee — pneul trebuie schimbat ca să ajungi la vulcanizare.",
      },
      {
        title: "Cauciuc complet dezumflat",
        desc: "Pierderea totală de presiune — conducerea mai departe distruge pneul și janta.",
      },
      {
        title: "Mașina nu are rezervă",
        desc: "Tot mai multe mașini vin fără roată de rezervă — în acest caz soluția e tractarea.",
      },
    ],
    steps: [
      {
        title: "Suni și spui dacă ai rezervă",
        desc: "Asta decide intervenția: montaj pe loc sau tractare la vulcanizare.",
      },
      {
        title: "Sosim la locul evenimentului",
        desc: "Echipa se poziționează în siguranță și evaluează pneul avariat.",
      },
      {
        title: "Montăm rezerva sau tractăm",
        desc: "Cu rezervă — pleci pe roata ta. Fără — mergem împreună la vulcanizare.",
      },
      {
        title: "Continui drumul",
        desc: "Cu rezerva montată ai autonomia de a ajunge la vulcanizare în ritmul tău.",
      },
    ],
    notCovered: [
      "Reparația pneului la vulcanizare — cost suportat de client în atelier",
      "Pneu nou — achiziția și montajul nu intră în serviciu",
      "Reparația jantei avariate — intervenție de specialitate, nu de teren",
    ],
    conditions: [
      "Fără roată de rezervă, remedierea se face la atelier — tractarea e soluția",
      "Intervenția în service sau vulcanizare nu este suportată de ASR24",
      "Rezerva montată permite circulația la viteză redusă — respectă limitele producătorului",
    ],
  },
  {
    slug: "deblocare-usi",
    menu: "Deblocare Uși",
    title: "Serviciu Deblocare Uși și Chei",
    tagline: "Cheia blocată în mașină? Intervenim fără daune.",
    image: "/img/asr-imagine4.jpg",
    imageAlt: "Intervenție ASR24",
    paragraphs: [
      "Situația clasică și frustrantă: cheia sau cartela de pornire a rămas în interiorul autoturismului și ușile s-au închis. Sau sistemul de închidere s-a blocat și nu mai răspunde la cheie.",
      "ASR24 organizează intervenția unei autospeciale specializate pentru deblocarea vehiculului — operațiune realizată cu tehnici și scule dedicate, concepute să nu producă daune caroseriei, garniturilor sau mecanismelor de închidere.",
      "Scopul este recuperarea cheii sau a cartelei de pornire, în măsura în care operațiunea este posibilă la fața locului. Dacă deblocarea nu este tehnic posibilă, soluția rămâne tractarea către service.",
    ],
    covers: [
      {
        title: "Deblocare fără avarii",
        desc: "Deschiderea vehiculului cu scule și tehnici dedicate — fără urme, zgârieturi sau garnituri rupte.",
      },
      {
        title: "Recuperare cheie sau cartelă",
        desc: "Cheia clasică sau cartela de pornire blocată în habitaclu — recuperată fără distrugeri.",
      },
      {
        title: "Sistem de închidere blocat",
        desc: "Încuietoare defectă sau sistem care nu mai răspunde la cheie — evaluare și deblocare.",
      },
      {
        title: "Continuare cu tractare",
        desc: "Dacă deblocarea nu e posibilă pe loc, vehiculul este tractat la service autorizat.",
      },
    ],
    scenarios: [
      {
        title: "Cheile pe scaunul din față",
        desc: "Clasicul scenario — ușa s-a închis automat cu cheile înăuntru.",
      },
      {
        title: "Cartela în portbagaj",
        desc: "Ai pus bagajele, ai închis haionul — cu cartela lăsată înăuntru.",
      },
      {
        title: "Copilul sau animalul blocat înăuntru",
        desc: "Situația care nu poate aștepta — intervenție în regim de prioritate maximă.",
      },
      {
        title: "Încuietoarea nu mai răspunde",
        desc: "Cheia e în mână, dar mecanismul e blocat — intervenție fără forțare.",
      },
    ],
    steps: [
      {
        title: "Suni și descrii situația",
        desc: "Unde sunt cheile, ce tip de sistem de închidere are mașina, dacă e urgență.",
      },
      {
        title: "Sosim cu sculele dedicate",
        desc: "Autospeciala de intervenție are echipament profesional de deblocare.",
      },
      {
        title: "Deblocăm fără daune",
        desc: "Operațiune precisă, realizată de personal care știe cum să deschidă fără urme.",
      },
      {
        title: "Recuperezi cheia",
        desc: "Reușit — ai cheia și mașina intactă. Imposibil — serviciul devine tractare la service.",
      },
    ],
    notCovered: [
      "Reprogramarea sau duplicarea cheilor — serviciu de specialitate separat",
      "Chei noi înlocuitoare — achiziția e responsabilitatea proprietarului",
      "Intervenția în service autorizat pentru sisteme de închidere defecte",
    ],
    conditions: [
      "Dacă nu se poate remedia la fața locului, serviciul se transformă în tractare",
      "Intervenția în service autorizat nu este suportată de ASR24",
      "Operațiunea se execută doar cu documentele de proprietate la îndemână",
    ],
  },
  {
    slug: "transport-auto",
    menu: "Transport Auto",
    title: "Transport Auto",
    tagline: "Transportăm autovehicule de orice categorie, în județul Argeș și împrejurimi.",
    image: "/img/fleet-1.jpg",
    imageAlt: "Autospecialele ASR24 aliniate",
    paragraphs: [
      "Transportul auto este serviciul planificat al ASR24: deplasarea autovehiculelor de orice categorie — mici, medii sau mari — dar și a autoutilitarelor, în orice stare, de la un punct la altul.",
      "Spre deosebire de tractare, care răspunde unei urgențe, transportul se programează: vehicul nou cumpărat care trebuie adus acasă, mașină fără ITP sau înmatriculare care nu poate circula, autovehicul mutat între service-uri sau localități.",
      "Operațiunea se realizează cu autospeciale dedicate transportului de vehicule, în județul Argeș și în împrejurimi, cu rută stabilită de comun acord cu dispeceratul.",
    ],
    covers: [
      {
        title: "Autovehicule de orice categorie",
        desc: "Vehicule mici, medii sau mari — în limitele de eligibilitate și capacitate ale autospecialei.",
      },
      {
        title: "Autoutilitare",
        desc: "Transport utilitare și vehicule comerciale ușoare, funcționale sau avariate.",
      },
      {
        title: "Vehicule în orice stare",
        desc: "Funcționale, defecte sau avariate — încărcare și transport cu echipamentul adecvat.",
      },
      {
        title: "Transport programat",
        desc: "Nu e urgență — planificăm împreună data, ora și ruta potrivite pentru tine.",
      },
    ],
    scenarios: [
      {
        title: "Mașină nouă cumpărată",
        desc: "Vehiculul e în altă localitate și trebuie adus — îl ridicăm și îl livrăm la poarta ta.",
      },
      {
        title: "Fără ITP sau înmatriculare",
        desc: "Vehiculul nu poate circula legal pe drum public — platforma e singura soluție legală.",
      },
      {
        title: "Mutat între service-uri",
        desc: "Reparația cere un atelier de specialitate — transportăm vehiculul între unități.",
      },
      {
        title: "Transport după vânzare",
        desc: "Ai vândut vehiculul și cumpărătorul e la distanță — livrare organizată și sigură.",
      },
    ],
    steps: [
      {
        title: "Suni și programezi",
        desc: "Descrii vehiculul, locul de plecare și destinația — stabilim data și tariful.",
      },
      {
        title: "Stabilim ruta",
        desc: "Dispeceratul confirmă programarea și detaliile logistice ale transportului.",
      },
      {
        title: "Preluăm vehiculul",
        desc: "Încărcare și ancorare corectă pe platforma autospecialei, la adresa stabilită.",
      },
      {
        title: "Livrăm la destinație",
        desc: "Descărcare și predare la adresa convenită, în starea în care a fost preluat.",
      },
    ],
    notCovered: [
      "Vehicule care depășesc limitele de gabarit ale autospecialei",
      "Asigurarea CASCO pentru perioada transportului — rămâne responsabilitatea proprietarului",
      "Servicii de curățenie sau pregătire a vehiculului înainte/după transport",
    ],
    conditions: [
      "Disponibil pentru membrii ASR24 și contra cost pentru intervenții punctuale",
      "Ruta, data și tariful se stabilesc împreună cu dispeceratul",
      "Acoperire în județul Argeș și în împrejurimi — distanțe mai mari se evaluează individual",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
