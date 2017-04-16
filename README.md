# Applitude - Chat App med ReactJS og Meteor Del 2
#### Innhold  
[Oppgave 0: Forord](#forord)  
[Oppgave 1: Brukere](#brukere)  
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
<a name="brukere"/>
## Oppgave 1: Brukere
Meteor tilbyr et allerede ferdiglaget brukersystem som benytter seg av en spesiell og mer
sikker versjon av MongoDB. 