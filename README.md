# Applitude - Chat App med ReactJS og Meteor Del 2
#### Innhold  
[Oppgave 0: Forord](#forord)  
[Oppgave 1: Material-UI](#material-ui)  
<a name="forord"/>
## Forord
Det er nå forventet at du har fortsått del 1 av kursrekken. Du skal være kjent med React
komponenter samt hvordan smarte komponenter fungerer og hvordan du bruker bibliotekene
som ble brukt i del 1.

I oppgavene har jeg med vilje vært vanskelig noen steder for å få deg til å tenke om hva du
gjør når du koder. Det blir veldig mye copy-paste på begynnelsen, men etterhvert som du
fortsetter på oppgavene, antar jeg at du skjønner hva du copy-paster og klarer å gjøre det
skrive det samme i andre kontekster. Spør meg på e-post hvis du ser ting som ikke stemmer
eller lurer på noe: uqtontran@gmail.com

__Sammendrag__  
Under dette kurset skal vi bygge videre på appen og dens funksjonalitet. Vi skal bygge videre på utseende
og følge Material-UI sin designstandard, men jeg oppfordrer deg til å bruke Material-UI sin dokumentasjon
til å gjøre appen mer unik.

__Prekoden__  
Prekoden som ligger i denne repositorien er basert på løsningsforslaget til del 1 med noen endringer:
* Mappestruktur er viktig, nå som vi skal utvide appen så kommer vi til å lage mange flere komponenter. 
Derfor har vi valgt å dele komponentene i forskjellige mapper, dette er veldig viktig å tenke på når
du koder egne prosjekter. Dette er veldig positivt fordi du viser til potensielle arbeidsgivere at
du tar hensyn til at andre skal sette seg inn i din kode.
* CSS filen er endret for å tilpasse Material-UI sine designstandarder. Noen klasser er også lagt til og
skal brukes i kurset.

__React__  
React er et front-end bibliotek som håndterer logikk på brukergrensesnittet til appen vår. Her bruker vi
konsepter som heter Components som er det som håndterer alt av rendering og visning av brukergrensesnittet.

Mer dokumentasjon om React: https://facebook.github.io/react/docs/hello-world.html  
React sin livssykel: https://facebook.github.io/react/docs/react-component.html

__Meteor__  
Meteor er et back-end rammeverk som håndterer det meste av server og klient kommunikasjon.
Det gjør det lettere for oss som utviklere å kode fordi vi slipper å server-klient flyten fra scratch.
Meteor bruker Javascript som programmeringsspråk som gjør at vi kun trenger å kunne ett programmeringsspråk
til å lage appen vår. MongoDB er standard databaseverktøyet som blir brukt med Meteor som er kjapt å sette opp
og lett å bruke, tilnærmet ingen databasekunnskaper trengs for å begynne.

Mer dokumentasjon om Meteor: http://docs.meteor.com/#/full/
<a name="material-ui"/>
## Oppgave 1: Material-UI og diverse

__Oppgave 1.1: Mongol__  
Mongol er et verktøy i Meteor som gir oss et brukergrensesnitt for å lettere jobbe med MongoDB
databasen. Installer Mongol med følgende kommando:
```
meteor add msavin:mongol
```

Start appen og åpne den i en nettleser. Med hotkey ctrl + M så skal det komme et brukergrensesnitt i appen
med full oversikt over databasen.

__Oppgave 1.2: AppBar__  
Hvis du noen gang har brukt en Android eller Google app så har du sikkert merket at de fleste appene har
en app bar øverst med en hamburgermeny på venstre side. Vi skal nå lage denne i vår app og gjøre endringer
i vår layout for å kunne legge inn ting som egne tittler på app baren. Her er et eksmpelbilde av hvordan
app baren ser ut i Google Inbox:

![bilde](http://heim.ifi.uio.no/uqtran/Applitude/Chat-app/Google-Inbox-app.jpg)

Lag en ny komponent i mappen app-components med navn AppHeader.jsx og fyll den med de vanlige komponent-
deklarasjonene som du har gjort tidligere. Vi vil at app baren vår skal inneholde en
tilbakeknapp og en knapp som åpner en drawer som skal vise noe (dette kommer vi tilbake
til senere). Importer følgende i AppHeader:

```javascript
import AppBar from 'material-ui/AppBar';
import GroupIcon from 'material-ui/svg-icons/social/group';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
```

Legg til en AppBar i render funksjonen, husk å wrappe den med et div element.
AppBar ar en property som heter title som kan bli satt til en streng som bestemmer
hva som skal stå på baren. Vi vil at routes.jsx skal få lov til å bestemme hva
som skal stå på AppBar fordi vi vil at det skal stå noe unikt med tanke på hvilken
side vi er på når vi bruker appen. For eksempel så vil vi at AppBar skal vise navnet
på appen på forisden og kanskje vise romnummber hvis vi er i et chatterom.

Fordi vi vil at routes.jsx skal bestemme hva som skal stå i title så setter vi
title til å være this.props.title. Husk å definere hva slags propType denne skal
være.

Komponenten AppLayout tar imot et nodeobjekt, body. Vi skal endre AppLayout slik at den også kan ta imot
enda et nodeobjekt, appHeader. Dette gjør vi ved å legge til et attributt i AppLayout.propTypes, vi kaller
den for appHeader, og skal ha samme egenskaper som body: PropTypes.node.isRequired. Legg til appHeader
i render funksjonen ved å hente den fra this.props. Legg til headeren over der vi renderer body.

Fordi AppLayout nå krever et header argument så må vi sende inn AppBar til AppLayout
på alle steder vi kjører mount på AppLayout i routes.jsx. Gå inn på routes.jsx og
importer AppHeader og send inn en AppHeader komponent til AppLayout. Husk også å sette
sende inn riktig title til hver route. Et forslag kan være å ha navnet på appen
på AppBar i LandingPage og nummer på chatrommet i ChatRoom.

Nå skal appbaren være synlig i appen, bygg opp appen og skjekk om det er en blå bar
øverst på appen.

AppBar tar imot en property, titleStyle, som tar imot et Javascript in-line CSS objekt
som bestemmer hvordan stylingen til tittelen skal ha.

__Oppgave 1.3: IconButton__  
La oss nå legge til en tilbakeknapp på venstre side av AppBar. AppBar har to
properties som heter iconElementLeft og iconElementRight som tar imot et HTML-element
og renderer disse på hver sin plass av AppBaren. Sett iconElementLeft til følgende
kode:

```
<IconButton
    className="icon-right-style"
    onTouchTap={()=>window.history.back()}
>
    <ArrowBackIcon color="#fff"/>
</IconButton>
```

Obs! Husk å gjøre lambdafunksjonen til en vanlig funksjon og sende inn referansen
til onTouchTap istedet.

__Oppgave 1.4: Drawer__  
Drawer er som navnet tilsier, en skuff og vi skal nå legge til denne i appen.
Akkurat som AppHeader så skal denne være en del av vår AppLayout, men vi kan gjøre 
det enda lettere og oversiktlig for oss selv. Fordi Drawer kun skal bli styrt av
AppHeader så kan vi heller legge til Drawer her. Importer Drawer fra material-ui/Drawer
i AppHeader.

Lag en IconButton på samme måte som du gjorde med iconLeftElement, men med 
iconRightElement istedet. Denne slaø ha GroupIcon som icon.

Drawer har en property, open, som tar imot en bolsk verdi som bestemmer om Drawer
skal være åpen. Lag en funksjon med et attributt i state, open, som er satt til false
og så lag en funksjon som setter denne til true hvis den høyre IconButton blir trykket
på. Drawer tar også imot en property, onRequestChange som må bli satt til en slik
funksjon:

```javascript
handleDrawerToggle(open) {
    this.setState({rightDrawerOpen:open});
}
```

Drawer har en property, openSecondary som tar imot en bolsk verdi som bestemmer 
hvilken side Drawer skal komme opp fra. Sett den til true for at Drawer skal komme
fra høyre side.

Nå skal høyre knapp åpne Drawer, test dette!
