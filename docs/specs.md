---
layout: default
---
[Accueil](./index.md) | [Apropos](./about.md) | Specifications | [Guides](./userguide.md)


**Présentation de l'application**

Malaria score card est une application professionnelle qui assure une meilleure présentation des fiches d'évaluations spécifique à la maladie malaria. Les Données sont paramétrées au préalable dans la menue administration en fonction des indicateurs ensuite, elle présente la fiche d'évaluation sous forme de tableau dans le menu score card avec les données des différents indicateurs paramétrés.

**Lancer l'application**

Dans le menu de dhis2, cliquez sue le logo de l'application score card pour ouvrir l'app.

**Présentation de la page d'accueil de l'apps**

Une fois l'application ouvert, vous verrez une page vide et deux (2) boutons :

- Le premier bouton (**SCORE CARD**) est le bouton permettant d'afficher les fiches d'évaluation en fonction des niveaux d'unités d'organisations.

- Le second bouton (**ADMINISTRATION**), permet d'avoir accès a la page paramétrage de l'application.

NB : avant d'afficher les tableaux il faut s'assurer que les indicateurs ont été paramétrer dans la page administration.

**Administration**

Dans la page administration, nous avons deux (2) zones :

1- La zone du mapping des unités d'organisations

2- La zone de mapping des éléments et indicateurs

**1\. Mapping des unités d'organisation**

Les niveaux des unités d'organisations diffèrent d'un pays à l'autre. Certains pays ont jusqu'à 4, 5, 6 ... niveaux. Pour ce fait vous devez paramétrer les niveaux d'organisations en fonction de votre pays.

**Par exemple** si le niveau région de votre pays est national alors vous sélectionnez national, si c'est district alors vous sélectionnez district.

Après avoir choisir les niveaux en fonction de votre dhis2 vous cliquez sur le bouton **save** pour sauvegarder votre paramétrage.

**2.**  **Mapping des éléments de données et indicateurs**

Dans la zone de mapping des éléments et indicateurs, vous verrez la liste des indicateurs, le groupe et la formule pour obtenir les valeurs en pourcentage. Ses données se trouve dans le data store de l'application.

Il faudra donc mapper ses indicateurs aux indicateurs et éléments de dhis2. Et aussi paramétrer les valeurs qui doivent représentées les bonnes données.

Pour paramétrer une ligne, vous devez cliquer sur le bouton **edit** en jaune juste à l'extrême droite.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image006.png)

Une fois le bouton **edit** actionner, vous verrez les champs à paramétrer s'activer pour vous permettre d'apporter votre modification.

Le premier champ est le type. Vous devez choisir le type (**indicateur** ou **élément de données**) dans lequel se trouve votre indicateur.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image007.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image008.png)

Après voir choisir le type, vous pouvez sélectionner votre indicateur ou élément de données.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image009.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image010.png)

Une fois finis les étapes de sélection de type et éléments de données, vous devez paramétrer les **couleurs**.

Pour paramétrer les couleurs vous avez 3 champs de sélection :

1- Le champs **Target (la cible)** qui a deux valeurs **0** et **100**.

Par exemple, si vous voulez que vos valeurs qui devront avoir la couleur **verte**  soit compris entre 0 et 20, vous sélectionnez dans le **target** **0** et dans **Achieved** **20**.

Et si dans le cas vous voulez avoir la couleur verte entre 100 et 70, vous sélectionnez dans le **target** **100** et dans **Achieved** **70**.

2- Le champs **Achieved**, est la limite de notre target sélectionner.

3- Le champ Not in track est la partie ou les valeurs prennent la couleur **rouge**

**NB** : entre la valeur achieved et not in track les valeurs on la couleur **Jaune**. Et lorsqu'il n'y a pas de        valeur alors c'est la couleur **grise**.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image011.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image012.png)

Une fois les paramétrages terminer, vous cliquez sur le bouton **save** en vert à l'extrême droite.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image013.png)

**Score card**

Le paramétrage étant finir, vous pouvez maintenant afficher votre fiche d'évaluation en fonction des niveau d'unités d'organisation.

Sur cette page, nous avons une seule zone de sélection. Dans cette zone de sélection, vous pouvez choisir le niveau que vous voulez afficher (région, district, facility).

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image014.png)

Une fois le niveau choisir, vous verrez afficher une autre zone de sélection qui vous permettra de sélectionner la région, le district ou le centre communautaire dont vous désirez afficher sa fiche d'évaluation.

Après avoir choisir le nom, vous cliquez sur **view** pour l'affichage.

**NB** : la période d'affichage est fixée au 12 derniers mois.

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image015.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image016.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image017.png)

Lorsque vous cliquez sur view, vous verrez deux (2) tableaux s'afficher.

1- Tableaux des sous niveaux du niveau choisir des 12 derniers mois

2- Tableaux general du niveau choisir des 12 derniers mois.

Dans notre exemple ici, nous avons afficher la fiche d'évaluation de la région de BO des 12 derniers mois

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image018.png)

Fiche d'évaluation des districts de la région de Bo des 12 derniers Mois

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image019.png)

Fiche d'évaluation des 12 derniers mois de la région de BO

**Télécharger les tableaux**

Pour sauvegarder vos tableaux dans le but d'une analyse avec votre équipe, vous pouvez télécharger les tableaux en cliquant sur le bouton **download**

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image020.png)![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image021.png)

![](file:////Users/rtohouri/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image022.png)

Image score card de la région de BoMEASURE MALARIA SCORECARD APP

FUNCTIONAL AND TECHNICAL REQUIREMENTS

1.  Functional Requirements for a set of Malaria M&E scorecards for mobile devices
    ==============================================================================

Users

MEASURE Evaluation envisions a diverse set of potential users at the periphery of the health system, including:

District level:

-   Malaria program managers

-   Data managers (malaria program, and HMIS)

-   Supply chain managers (pharmaceutical and malaria commodities, such as bed nets)

-   District health medical officers

-   Vector control personnel

-   Disease surveillance officers

Facility level:

-   Facility In-charge 

-   Data manager (Hospital) 

-   Malaria focal person (hospital) 

-   Health service provider (Health center)

-   Stock managers

Community level:

-   Community Health Workers

-   Village volunteers

Content: 

The mobile dashboards should have up-to-date information for program indicator

-   Impact indicator performance score comparisons between districts and between health facilities

-   Process indicator performance score comparisons between districts and between type of health facilities over time

-   Facility process performance score comparisons between services(Prevention, treatment, commodities, health outcomes and mortality) over time

-   Maps of facility coverage performance score comparisons 

Functionality

-   See performance score in different colors in a table or map in a given period

-   See a scorecard performance for the health outcome indicators (cured, deaths) over time for one region or district or facility

-   Select content to be displayed in the scorecard as needed, from a list of indicators, data elements or rates. 

-   select how an indicator is displayed -- i.e. as a scorecard table 

-   display thematic maps (if possible)

-   Have multiple "views" -- i.e. toggle between different configured scorecards (2-3 tables each), for different aspects of program monitoring (e.g. treatment, prevention, commodities, health outcome, etc.)

-   make a static report (like a PDF) of a given scorecard that could be readily shared (email or posted to social networking platform)  - PDF export functionality

-   ability to add text-based annotations (e.g. for interpretations) of individual tables

-   compare results with predefined performance scores -- Apply a color legend based on predefined targets for each indicator or data element.

-   Show GPS coordinates (e.g. distribution of health centers or CHWs engaged in malaria activities

Key performance indicators and Intervals

|\
 |

Achieved (Green)

 |

In progress (Yellow)

 |

Not in track (Red)

 |

No Data (Grey)

 |
|

Impact indicators

 |
|

Change in estimated malaria incidence (2020 -- 2024)

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Change in estimated malaria mortality (2020 -- 2024)

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Change in estimated malaria cases treated and cured (2020 -- 2024)

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Process indicators

 |
|

Prevention

 |\
 |\
 |\
 |\
 |
|

% of nets distributed

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

% of fever/suspected cases tested with RDT or microscopy

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

% pregnant women provided IPTp at more than 12 week gestational age

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

% pregnant women receiving IPT x 2 only

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

% pregnant women receiving IPT x 3

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Treatment

 |\
 |\
 |\
 |\
 |
|

% of malaria confirmed cases treated with first-line antimalarial treatment according to national policy

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

% of severe malaria cases referred for treatment

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Commodities management

 |\
 |\
 |\
 |\
 |
|

% of health facilities with stock out

 |

70% and Greater

 |

[40% -69%]

 |

39% and less

 |\
 |
|

Number of days of ACT stock out

 |

0

 |

Less than 6

 |

7 and more

 |\
 |
|

Number of days of SP stock out

 |

0

 |

Less than 6

 |

7 and more

 |\
 |
|

Number of days of Nets stock out

 |

0

 |

Less than 6

 |

7 and more

 |\
 |

The proposed score performance targets are illustrative. Each country will define their score performance targets to monitor.

Display of the Region scorecard table

|\
 |

District 1

 |

District 2

 |

District 3

 |

District 4

 |
|

Impact indicators

 |
|

Change in estimated malaria incidence (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria mortality (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria cases treated and cured (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Process indicators

 |
|

Prevention

 |\
 |\
 |\
 |\
 |
|

% of nets distributed

 |\
 |\
 |\
 |\
 |
|

% of fever cases tested with RDT

 |\
 |\
 |\
 |\
 |
|

% pregnant women provided IPTp at more than 12 week gestational age

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 2 only

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 3

 |\
 |\
 |\
 |\
 |
|

Treatment

 |\
 |\
 |\
 |\
 |
|

% of malaria confirmed cases treated with first-line antimalarial treatment according to national policy

 |\
 |\
 |\
 |\
 |
|

% of severe malaria cases referred for treatment

 |\
 |\
 |\
 |\
 |
|

Commodities management

 |\
 |\
 |\
 |\
 |
|

% of health facilities with stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of ACT stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of SP stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of Nets stock out

 |\
 |\
 |\
 |\
 |

Display of the District scorecard table

|\
 |

Facility 1

 |

Facility 2

 |

Facility 3

 |

Facility 4

 |
|

Impact indicators

 |
|

Change in estimated malaria incidence (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria mortality (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria cases treated and cured (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Process indicators

 |
|

Prevention

 |\
 |\
 |\
 |\
 |
|

% of nets distributed

 |\
 |\
 |\
 |\
 |
|

% of fever cases tested with RDT

 |\
 |\
 |\
 |\
 |
|

% pregnant women provided IPTp at more than 12 week gestational age

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 2 only

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 3

 |\
 |\
 |\
 |\
 |
|

Treatment

 |\
 |\
 |\
 |\
 |
|

% of malaria confirmed cases treated with first-line antimalarial treatment according to national policy

 |\
 |\
 |\
 |\
 |
|

% of severe malaria cases referred for treatment

 |\
 |\
 |\
 |\
 |
|

Commodities management

 |\
 |\
 |\
 |\
 |
|

% of health facilities with stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of ACT stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of SP stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of Nets stock out

 |\
 |\
 |\
 |\
 |

Display of the Facility scorecard table

|\
 |

Facilty

 |

CHW 1

 |

CHW 2

 |

CHW 3

 |
|

Impact indicators

 |
|

Change in estimated malaria incidence (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria mortality (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria cases treated and cured (2020 -- 2024)

 |\
 |\
 |\
 |\
 |
|

Process indicators

 |
|

Prevention

 |\
 |\
 |\
 |\
 |
|

% of nets distributed

 |\
 |\
 |\
 |\
 |
|

% of fever cases tested with RDT

 |\
 |\
 |\
 |\
 |
|

% pregnant women provided IPTp at more than 12 week gestational age

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 2 only

 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 3

 |\
 |\
 |\
 |\
 |
|

Treatment

 |\
 |\
 |\
 |\
 |
|

% of malaria confirmed cases treated with first-line antimalarial treatment according to national policy

 |\
 |\
 |\
 |\
 |
|

% of severe malaria cases referred for treatment

 |\
 |\
 |\
 |\
 |
|

Commodities management

 |\
 |\
 |\
 |\
 |
|

% of health facilities with stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of ACT stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of SP stock out

 |\
 |\
 |\
 |\
 |
|

Number of days of Nets stock out

 |\
 |\
 |\
 |\
 |

Display of one Region or District or Facility scorecard table over time

|\
 |

Jan

 |

Feb

 |

Mar

 |

Apr

 |

May

 |

Jun

 |

Jul

 |

Sep

 |

Oct

 |

Nov

 |

Dec

 |
|

Impact indicators

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria incidence (2020 -- 2024)

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria mortality (2020 -- 2024)

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Change in estimated malaria cases treated and cured (2020 -- 2024)

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Process indicators

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Prevention

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% of nets distributed

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% of fever cases tested with RDT

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% pregnant women provided IPTp at more than 12 week gestational age

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 2 only

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% pregnant women receiving IPT x 3

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Treatment

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% of malaria confirmed cases treated with first-line antimalarial treatment according to national policy

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% of severe malaria cases referred for treatment

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Commodities management

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

% of health facilities with stock out

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Number of days of ACT stock out

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Number of days of SP stock out

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Number of days of Nets stock out

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |

1.  Technical requirements for the MEASURE Malaria scorecard app
    ============================================================

1.  ### Phase 1: DHIS2 web based responsive mobile friendly scorecard app

The first phase of the project will consist of developing a REACT.js DHIS mobile friendly app that will allow mobile display of the scorecards representation of a set of indicators.

### Configuration interface:

-   Will allow the selection of a DHIS2 indicator and data element group to be used for scorecard generation.

-   Ordering of the scorecards

### Scorecard mobile interface

-   Display of mobile friendly scorecard automatically adjusting to the screen dimensions (Mobile or Desktop)

### Report module

-   Possibility to download the scorecards in PDF or image format.

1.  ### Phase 2: Android scorecard view app 

During this initial phase an android app will be developed that will only download the scorecard generated using the web based DHIS2 mobile friendly app in a PDF or Image format and display it on the mobile phone offline.

1.  ### Phase 3: Android fully configurable dynamic offline scorecard app

During this phase, the app will evolve to allow download of the metadata and a certain amount of data related to a selected set of indicators for a certain number of periods to the mobile device and allow for use in a predefined set of scorecard tables designed to be used on a mobile phone app.

1.  ### Programming language:

During phases 1 the DHIS2 mobile friendly app will be developed using JavaScript programming language and the following libraries:

-   REACT.js for the app development

-   Bootstrap for the template engine

-   Highchart library for dashboard charts generation

At the phase 2 and 3 the Android app will be developed using the JAVA programming language.

1.  Implementation timeline
    =======================

|

Feature

 |

Description

 |

Development time

 |

Responsible

 |
|

January

 |

February

 |
|

Weeks

 |

Weeks

 |
|

1

 |

2

 |

3

 |

4

 |

1

 |

2

 |\
 |\
 |
|

PDF scorecard generation module

 |\
 |\
 |

x

 |\
 |\
 |\
 |\
 |\
 |
|

Scrorecards implementations

 |\
 |\
 |

x

 |

x

 |

x

 |\
 |\
 |\
 |
|

Legend implementation 

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

orgunit comparisons chart

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Time based scorecards comparisons over time

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Orgunit based scorecards

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

social features - sharing and comments

 |\
 |\
 |\
 |\
 |\
 |\
 |\
 |
|

Testing of the web based DHIS2 app

 |

Collecting feedback and improvement from end users

 |\
 |\
 |

x

 |

x

 |\
 |\
 |\
 |
|

Android app v1

 |

PDF version the web based scorecard

 |\
 |\
 |\
 |

x

 |\
 |\
 |\
 |
|

Testing android app v1

 |\
 |\
 |\
 |\
 |

x

 |

x

 |\
 |\
 |
|

Android app v2

 |

Dynamic scorecard generation based on metadata and data on the mobile device

 |\
 |\
 |\
 |\
 |

x

 |

x

 |\
 |
|

Testing android app v1

 |\
 |\
 |\
 |\
 |\
 |\
 |

x

 |\
 |


* * *

 [Accueil](./index.md) | [Apropos](./about.md) | Specifications | [Guides](./userguide.md)
