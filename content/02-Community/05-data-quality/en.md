---
title: Data quality requirements
description: Publishers play an essential role not simply in sharing datasets, but also in managing their quality, completeness and usefulness and ensuring their integration and value within GBIF’s global data index. 
category: Community
subCategory: Data quality requirements
image: /images/Pachysoma-rodriguesi.jpg
imageTitle: Namibian desert dung beetle (*Pachysoma rodriguesi*). CC BY-NC-SA 2.0 2011 Jochen Smolka.
imageLink: https://flic.kr/p/diZiR5
---
# Data quality requirements

## Overview

To share data through GBIF.org, publishers typically have to collate or transform existing datasets into a suitably standardized format. This work may include additional processing, content editing and configuration to map a dataset’s content into one of the available data transfer formats as well as publication through one of the available data publishing tools (such as GBIF's [Integrated Publishing Toolkit](http://gbif.org/ipt), or IPT).

Once published, GBIF’s real-time infrastructure ‘indexes’ or ‘harvests’ new datasets, integrating them into a common access system where users can retrieve any and all data through common search and download services. As datasets are indexed, GBIF.org performs additional checks, interpretation and conversion routines to ensure that data are interoperable and comply with minimum standards of data formats, data quality and fitness for use. But many criteria for quality and usability of data, however, are best and most easily handled when addressed at their source: the individual dataset.

Publishers thus play an essential role not simply in sharing datasets, but also in managing their quality, completeness and usefulness as well as ensuring their integration and value within GBIF’s global knowledge base. Learn more about data quality requirements and recommendations for
+ [Occurrence-only datasets](#occurrence)
+ [Checklists](#checklist)
+ [Sampling-event datasets](#sampling)

In practice, we encourage those responsible for publishing data to get acquainted with the expected data formats and content requirements as early as possible in the process (see also the pre-configured GBIF Excel templates with required and recommended terms for [Occurrence-only datasets](https://github.com/gbif/ipt/wiki/occurrenceData#templates), [Checklists](https://github.com/gbif/ipt/wiki/checklistData#templates), and [Sampling-event datasets](https://github.com/gbif/ipt/wiki/samplingEventData#templates), all available with example data). Doing so will save a lot of effort that may be needed at later stages, for example, in adding data conversions, capturing information for required or strongly recommended fields, or performing and addressing final pre-publication data-quality checks.
-----

## Occurrence-only datasets<a name="occurrence"></a>

Learn more about [occurrence-only and other classes of datasets currently supported on GBIF.org](/publishing-data/summary#datasetclasses)

### **Darwin Core record details**

|Term | [Status](#status) |
|--|--|
|[occurrenceID](#dcOccurrenceID) | Required |
|[basisOfRecord](#dcBasis) | Required |
|[scientificName](#dcSciName) | Required |
|[eventDate](#dcEventDate) | Required |
|[countryCode](#dcCountryCode) | Required |
|[taxonRank](#dcTaxonRank) | Strongly recommended |
|[kingdom](#dcKingdom) | Strongly recommended | 
|[decimalLatitude & decimalLongitude](#dcLatLong) | Strongly recommended |
|[geodeticDatum](#dcGeodeticDatum) | Strongly recommended |
|[coordinateUncertaintyInMeters](#dcUncertainty) | Strongly recommended |
|[individualCount, organismQuantity & organismQuantityType](#dcCount) | Strongly recommended |
|[informationWithheld](#dcWithheld) | Share if available |
|[dataGeneralizations](#dcGeneralizations) | Share if available |
|[eventTime](#dcEventTime) | Share if available |
|[country](#dcCountry) | Share if available |

### **Dataset metadata (EML)**

|Term | [Status](#status) |
|--|--|
|[title](#emlTitle) | Required |
|[description](#emlDescription) | Required |
|[publishing organization](#emlPublisher) | Required |
|[type](#emlType) | Required | 
|[projectID](#emlProjectID) | Required |
|[license](#emlLicense) | Required |
|[basis of record](#emlBasis) | Required |
|[contact(s)](#emlContact) | Required |
|[creator(s)](#emlCreator) | Required |
|[metadata provider(s)](#emlMetadataProvider) | Required |
|[citation](#emlCitation) | Strongly recommended |
|[additional metadata](#emlAdditional) | Share if available |

-----

## Checklist datasets<a name="checklist"></a>

Learn more about [checklist datasets and other classes of datasets currently supported on GBIF.org](/publishing-data/summary#datasetclasses)

### **Darwin Core record details**

|Term | [Status](#status) |
|--|--|
|[taxon](#dcTaxon) | Required |
|[scientificName](#dcSciName2) | Required |
|[taxonRank](#dcTaxonRank2) | Required |
|[kingdom](#dcKingdom2) | Strongly recommended | 
|[parentNameUsage](#dcParentName) | Strongly recommended | 
|[acceptedNameUsage](#dcAcceptedName) | Strongly recommended | 
|[vernacularName](#dcVernacularName) | Share if available | 

### **Dataset metadata (EML)**

|Term | [Status](#status) |
|--|--|
|[title](#emlTitle2) | Required |
|[description](#emlDescription2) | Required |
|[publishing organization](#emlPublisher2) | Required |
|[type](#emlType2) | Required | 
|[projectID](#emlProjectID2) | Required |
|[license](#emlLicense2) | Required |
|[contact(s)](#emlContact2) | Required |
|[creator(s)](#emlCreator2) | Required |
|[metadata provider(s)](#emlMetadataProvider2) | Required |
|[citation](#emlCitation2) | Strongly recommended |

-----

## Sampling-event datasets<a name="sampling"></a>

Learn more about [sampling-event and other classes of datasets currently supported on GBIF.org](/publishing-data/summary#datasetclasses)

### **Darwin Core record details**

|Term | [Status](#status) |
|--|--|
|[eventID](#dcEventID) | Required |
|[eventDate](#dcEventDate2) | Required |
|[countryCode](#dcCountryCode2) | Required |
|[samplingProtocol](#dcSamplingProtocol) | Required |
|[samplingSizeValue & samplingSizeUnit](#dcSamplingSize)  | Required |
|[parentEventID](#dcParentEventID) | Strongly recommended |
|[samplingEffort](#dcSamplingEffort) | Strongly recommended |
|[locationID](#dcLocationID) | Strongly recommended |
|[decimalLatitude & decimalLongitude2](#dcLatLong) | Strongly recommended |
|[geodeticDatum](#dcGeodeticDatum2) | Strongly recommended |
|[coordinateUncertaintyInMeters](#dcUncertainty2) | Strongly recommended |
|[footprintWKT](#dcFootprintWKT) | Strongly recommended |
|[occurrenceStatus](#dcOccurrenceStatus) | Strongly recommended |

### **Dataset metadata (EML)**

|Term | [Status](#status) |
|--|--|
|[title](#emlTitle3) | Required |
|[description](#emlDescription3) | Required |
|[publishing organization](#emlPublisher3) | Required |
|[type](#emlType3) | Required | 
|[projectID](#emlProjectID3) | Required |
|[license](#emlLicense3) | Required |
|[contact(s)](#emlContact3) | Required |
|[creator(s)](#emlCreator3) | Required |
|[metadata provider(s)](#emlMetadataProvider3) | Required |
|[citation](#emlCitation3) | Strongly recommended |

-----

## Status<a name="status"></a>

### Required information

The items listed below constitute the minimum formal requirements for publishing an occurrence dataset. GBIF.org will not accept a dataset without these terms and will not index the records. While these items are mandatory for publishing the dataset at all, they are only the starting point. The usefulness of the published data will still be severely limited unless additional information is supplied.

### Strongly recommended

In addition to the mandatory data elements, we strongly recommend completing several more  fields that help improve the usefulness of the dataset because:
+ some information supports the integration into a global data resource and prevents ambiguity, e.g. in matching scientific names that could apply to more than one organism (homonyms) to the correct place within the backbone taxonomy
+ more precise geo-location data (coordinates) significantly increase the usefulness of the data for a wide range of use cases
+ additional qualifiers for some data elements, e.g. coordinates, support the interpretation of those elements and help users to better estimate their usefulness for a given data use case
+ some data redundancy supports quality control and error detection (e.g. testing country codes against coordinates where both are supplied)
+ last not least, the richer the spectrum of available information of a dataset is, the more potential usage areas it becomes available for, meaning the dataset will me more widely accessible and used and cited more often

### Share if available

If additional data are available, consider sharing them in order to increase the usefulness of your published data.

## Terms

### Occurrence-only datasets

**occurrenceID**<a name="dcOccurrenceID"></a><br />*Darwin Core dataset element*, REQUIRED for occurrence-only datasets<br />A unique identifier for the occurrence, allowing the same occurrence to be recognized across dataset versions as well as through data downloads and use (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#occurrenceID))<br />Ideally, the occurrenceID is a persistent global unique identifier. As a minimum requirement, it has to be unique within the published dataset. It allows to recognize the same occurrence over time when the dataset indexing is refreshed; it links additional data like images; and it makes it possible to cite records e.g. in usage reports or in publications. This means that the occurrenceID needs to reliably stay with the occurrence at source, and to consistently refer to the same occurrence in published datasets and any underlying source data.

**basisOfRecord**<a name="dcBasis"></a><br />*Darwin Core dataset element*, REQUIRED for occurrence-only datasets<br />The type of the individual record, e.g. observation, physical specimen, fossil, living ex-situ, culture collection specimen (note the [metadata entry](#emlBasis) above as well as [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#basisOfRecord)<br />Even if the basis of record is supplied for the dataset as a whole, it is recommended practice to add it to each individual record as well to make the information explicitly available, e.g. in downloads containing data from a range of different datasets.

**scientificName**<a name="dcSciName"></a><br />*Darwin Core dataset element*, REQUIRED for occurrence-only datasets<br />The full scientific name of the organism, to the lowest level taxonomic rank that is possible to supply, and including authorship and year of the name where applicable<br />The scientific name is one of the most important and frequently used search criteria for data access, and is indispensable for identifying the biological organism that is at the center of any occurrence record (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/scientificName). As occurrence records are the evidence of the occurrence of a species (or other taxa) at a particular place on a specified date, the scientific name is one of the core pieces of information required for any record. Ideally, the name supplied is at species level or below. If the determination only allows for information on a higher level, this is acceptable as well. Valid scientific names are Latin names following the syntax rules of the respective taxon group (e.g. botanical nomenclature). Not permitted are, i.e., working names ("*Mallomonas* sp.4"), common names ("fruit fly"), or names containing identification qualifiers ("*Anemone cf. nemorosa*").

**eventDate**<a name="dcEventDate"></a><br />*Darwin Core dataset element*, REQUIRED for occurrence-only datasets<br />The date or date interval during which the occurrence record was collected, following ISO 8601 date-time standard (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#eventDate))<br />The date span e.g. of a sampling trip, if the exact date of the occurrence event cannot be determined to the day, or else the precise date.  Supply the information to the best level of detail possible, using ISO 8601 notation, but contrary to the ISO specification, *do not* include time of day, and do not use leading zeros to pad incomplete dates. The year has to be four-digit, i.e. '2016', *not* '16'. In some cases, especially for historical data, only years may be known, in other cases, full dates can be supplied. For the levels of information that are unknown, avoid padding and instead end the value, to limit ambiguity of interpretation. If, for example, only year and month are known, represent this as 2016-04, *not* as 2016-04-01. Note that the *time should not be included as part of this element*, using eventTime instead where required.

**countryCode**<a name="dcCountryCode"></a><br />*Darwin Core dataset element*, REQUIRED for occurrence-only datasets<br />A two-letter standard abbreviation for the country of the occurrence locality (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/countryCode). As the third core part of the documentation of a taxon occurrence, information on the collection or observation locality (geographic reference) is essential for any record. The country code is the proposed minimum standard to supply this information. The format for this field follows the ISO 3166-1-alpha-2 standard for country codes. Those are two-letter codes for each country; lists can be found on-line. Note that for this data item, use of the codes is required, and full country names (in any language) will not be accepted. Publishers who wish to supply the country name in addition may add the [appropriate element](http://rs.tdwg.org/dwc/terms/country). In most cases, occurrences can be linked to a specific country. In cases where it is not possible to supply a country code (e.g. marine data outside of coastal zones), geographical coordinates should be supplied instead. 

**taxonRank**<a name="dcTaxonRank"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />The taxonomic rank of the supplied scientific name (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/taxonRank))
The taxon rank supports the interpretation of the scientific name during indexing, and supports matching the occurrence record to the core taxonomy, especially in the case of names at genus level or above (monomials). While the format of higher taxon names in some groups contains indicators of their rank, this is not consistent across or even within groups, and cannot be reliably used for interpretation. For placing names correctly, explicitly specifying the taxon rank, alongside information on the higher taxonomy, is an important criterion. For practical purposes, the ranks used have to be (major) Linnean ranks: kingdom, phylum, class, order, family, genus, species. Both Latin or English terms are accepted.

**kingdom**<a name="dcKingdom"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />the full scientific name specifying the kingdom that the occurrence's scientific name is classified under (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/kingdom) and other higher taxonomy, if possible<br />
With scientific names, there are numerous cases where the matching of a given name against the core taxonomy is unsure or ambiguous. This is the case, for example, with homonyms (identical names exist for different organisms, usually across groups), newly described names that are not yet part of the existing taxonomic tree, or spelling variants (typos, hyphenation etc). To support exact matching of a scientific name against the core taxonomy, additional names at higher ranks help interpretation and error prevention.
Names should be scientific (latin) names at major Linnean ranks, like "Animalia" (kingdom) or "Rosaceae" (family). *Not*: common names ("animals"), abbreviations ("Rosac."), intermediate rank levels ("Tetrapoda" (superclass)), or polyphyletic or non-taxonomic groupings ("algae", "herbivora").

**decimalLatitude** & **decimalLongitude**<a name="dcLatLong"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />The geographic latitude or longitude, resp., in decimal degrees. Where coordinate values are available, both fields need to be supplied (see *Darwin Core Terms: A quick reference guide* on [latitude](http://rs.tdwg.org/dwc/terms/decimalLatitude) and [longitude](http://rs.tdwg.org/dwc/terms/decimalLongitude)<br />
Valid values lie between -90 and 90 incl. (latitude; 0: Equator), or -180/180 incl. (longitude; 0: Greenwich Meridian). Decimal coordinate values provide a geolocation of the occurrence that is much more informative than the country name alone, and that is stable over time (unlike the borders of countries). Many data use cases require coordinates if the data are to be of value or usable at all, for example species distribution modeling or population studies in specific areas.
A number of issues concerning coordinates are encountered frequently. While the indexing process makes efforts to identify such cases and propose corrections, e.g. by plausibility-testing coordinates against country names, attention is needed already at the level of data preparation and publication. Such issues include: transformation errors (resulting from e.g. conversion of degrees-minutes-seconds into decimal values), accidental swapping of values, either in the dataset or during the mapping process (latitude and longitude are reversed), or negation of values (transposition of locations from north to south, east to west or vice versa through the accidental or systematic loss or addition of minus-values). Additional points to keep in mind during data preparation are technical defaults (e.g. database settings substituting 0-values instead of unknown values resulting in records supplying lat/long as 0/0; over-precision of data by automatic number-padding (lat -17.79200000 where lat -17.792 would be appropriate), or the need to blur coordinate precision for e.g. the protection of sensitive species. Also note that gridded data, i.e. where coordinates represent centroids of grid cells in a field survey rather than the actual occurrence locality, may be better represented by publishing the dataset as sample data rather than as occurrence records. Especially in such cases, it is essential to also supply the [coordinateUncertaintyInMeters](#dcUncertainty).

**geodeticDatum**<a name="dcGeodeticDatum"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />The coordinate system and set of reference points upon which the geographic coordinates are based (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/geodeticDatum)<br />
Different geodetic systems exist, and the exact locality of a point depends on which reference system the coordinates refer to. This is why the system should always be explicitly named when known: depending on the geographic region, the datum shift between two systems can vary from zero to hundreds of meters for a given point. When no value is supplied, GBIF's indexing process assumes the reference system to be WGS 84 (World Geodetic System 1984, a global approximation at sea level and, i.e., base of GPS data); but the more frequently the geodetic datum can be supplied explicitly by data publishers, the more reliable the geographic representation of occurrences will become, e.g. through datum conversion. It is likewise important to explicitly document the lack of knowledge of the system used, as this increases confidence in data interpretation. Examples: WGS84;EPSG:4326; unknown. 

**coordinateUncertaintyInMeters**<a name="dcUncertainty"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />The horizontal distance from the given decimalLatitude and decimalLongitude in meters, describing the smallest circle containing the whole of the Location (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters))<br />
This is an indicator for the accuracy of the coordinate location, described as the radius of a circle around the stated point location. It allows to estimate the potential distance of the real occurrence location from the recorded values, and largely depends on the methodology used in coordinate determination. Thus, the value may be specific to or estimated from the methodology or device used for geolocating, e.g. 30 (reasonable lower limit of a GPS reading under good conditions if the actual precision was not recorded at the time). Note that 0 (zero) is not a valid value for this measure. If the value is unknown or not applicable, the value should be empty (null). If for some reason the coordinateUncertaintyInMeters was artificially increased, for example by rounding the coordinate values, the fields informationWithheld or dataGeneralizations must be filled in addition. Examples: 30; 71; [empty]. Not: 0.

**individualCount, organismQuantity & organismQuantityType**<a name="dcCount"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for occurrence-only datasets<br />To record the quantity of a species occurrence, e.g. as the number of individuals, percentage of vegetation coverage, or the biomass (see *Darwin Core Terms: A quick reference guide* on [individualCount](http://rs.tdwg.org/dwc/terms/individualCount), [organismQuantity](http://rs.tdwg.org/dwc/terms/organismQuantity) and [organismQuantityType](http://rs.tdwg.org/dwc/terms/organismQuantityType)<br />
In many cases, a single occurrence record represents more than one individual, and for uses like population studies, this information is interesting to users of data. A record could, for example, represent a flock of birds, a beech forest, a plankton sample, or a herbarium sheet with several specimens of a given species of grass. If the dataset derives from standard protocols for measuring and monitoring biodiversity (e.g. a vegetation transect, a bird census, or freshwater and marine sampling), first of all **check whether the dataset type of sampling-event data may be more appropriate to use**, and if yes, continue there [link to the sampling-event data document]. If the purpose is to document the occasional individual count or batch size, or if there is no uniform underlying sampling protocol to the dataset, then such counts can be documented within an occurrence dataset. Use the individualCount element if all such counts concern individual organisms, or else add the quantity type information to the dataset and map the numbers to the organismQuantity element, and the type to the organismQuantityType. Examples: individualCount: "5". Or: organismQuantity: "5"/ organismQuantityType: "individuals". organismQuantity: "r" / organismQuantityType: "BraunBlanquetScale".

**informationWithheld**<a name="dcWithheld"></a><br />*Darwin Core dataset element*, SHARE IF AVAILABLE for occurrence-only datasets<br />See http://rs.tdwg.org/dwc/terms/informationWithheld

**dataGeneralizations**<a name="dcGeneralizations"></a><br />*Darwin Core dataset element*, SHARE IF AVAILABLE for occurrence-only datasets<br />See http://rs.tdwg.org/dwc/terms/dataGeneralizations

**eventTime**<a name="dcEventTime"></a><br />*Darwin Core dataset element*, SHARE IF AVAILABLE for occurrence-only datasets<br />See http://rs.tdwg.org/dwc/terms/eventTime

**country**<a name="dcCountry"></a><br />*Darwin Core dataset element*, SHARE IF AVAILABLE for occurrence-only datasets<br />See http://rs.tdwg.org/dwc/terms/country

**title**<a name="emlTitle"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />The title displayed for the dataset on GBIF.org<br />Recommended: a brief, but descriptive title that characterizes the dataset in an international context and distinguishes it from similar datasets in other institutions, e.g., 'Birds fallen at Danish Lighthouses 1883 through 1939', rather than "Birds". The title will be part of the dataset citation on use of the data.

**description**<a name="emlDescription"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />An English language text describing the dataset<br />This may include a longer version of title, a description of geographic, temporal and taxonomic scope of the collection, methodology and purpose of the underlying project or collection, relevant literature references, and any other information you consider relevant to characterize the dataset. A second version of the description in another language than English may be added underneath

**publishing organization**<a name="emlPublisher"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />The name of the institution or organization listed as the data publisher on GBIF.org<br />The publishing organization is the institution which holds or owns the dataset and is in charge of its contents and maintenance. The title given should be the official title of the organization as registered with relevant authorities, listed on websites, and, if applicable, as stated in the project contract.

**type**<a name="emlType"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />The type, or class, of the dataset<br />The record type describes the 'core' or main focus of all records contained in a given dataset. For an occurrence-only dataset, the value here will always be "occurrence". *N.B.: Occurrences may also appear as part of checklists and sample-event datasets.*

**projectID**<a name="emlProjectID"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />A unique identifier for the project from which a dataset is derived<br />The record type is a GUID or other identifier that is near globally unique. **Note that this is required for BID projects.**

**license**<a name="emlLicense"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />A machine-readable statement of the rights assigned to the published dataset<br />Datasets without a valid license statement will not be accepted for publication. Machine-readable licenses allow automated data filters and give users clear guidance on permitted uses of the data, thereby promoting data use and citation. *N.B.: All datasets funded under the [BID programme](http://gbif.org/bid) must be published under either a Creative Commons [CC0 rights waiver](https://creativecommons.org/about/cc0) or a [CC BY Attribution license](https://creativecommons.org/licenses/by/4.0).*

**basis of record**<a name="emlBasis"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />The type of the individual records within the dataset, provided they are all of the same kind<br />[Available values](http://rs.gbif.org/vocabulary/dwc/basis_of_record.xml): PreservedSpecimen, FossilSpecimen, LivingSpecimen, HumanObservation, MachineObservation, MaterialSample. The basis of record is an important data filter that allows a user to distinguish between, e.g., in-situ and ex-situ living organisms for population studies, or to distinguish between reported field observations and vouchered, specimen-based information whose objects can be revisited. Note that for datasets with mixed content, the basisOfRecord element is also available at [record level](#dcBasis), and content should always be supplied there as well. Also note that the value "Occurrence" should not be used, even though it is listed in some places alongside the others.

**contact(s)**<a name="emlContact"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />Contact data—at least a name and email—for at least one administrative contact for the dataset<br />Contact data will be publicly visible at gbif.org. This information is required to ensure the possibility of communication about the dataset. The administrative contact is the person/role to be consulted about content, quality, and rights questions concerning the dataset, both by users and by the GBIF Secretariat. If personal contact data cannot be supplied, it is possible to supply a functional contact through a role name (e.g. "Curator") and email [collections@museum.org](http://#)). It is necessary, though, that responsibilities for handling incoming communication are clearly defined and followed internally.

**creator(s)**<a name="emlCreator"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />contact data—at least a name and email—for the creator of the dataset<br />(see [link])

**metadata provider(s)**<a name="emlMetadataProvider"></a><br />*Dataset metadata EML*, REQUIRED for occurrence-only datasets<br />contact data—at least a name and email—for the author of the dataset metadata<br />(see [link])

**citation**<a name="emlCitation"></a><br />*Dataset metadata EML*, STRONGLY RECOMMENDED for occurrence-only datasets<br />–A text specifying how your dataset should be cited in publications that make use of your data.<br />
To ensure your dataset gets cited the way you want, you can explicitly specify the requested citation. This text will be displayed on the dataset page, and it will be supplied to data users together with downloads that contain any contribution from your dataset. If no text is specified, GBIF will automatically supply a standard format citation that includes the dataset name and the name of the publishing institution, together with the date of the download and a reference to gbif.org.

**additional metadata**<a name="emlAdditional"></a><br />*Dataset metadata EML*, SHARE IF AVAILABLE for occurrence-only datasets<br />Enrich the description and improve the fitness of use of your dataset<br />See [complete description of all supported elements](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#basic-metadata).

#### Checklist datasets

**taxonID**<a name="dcTaxon"></a><br />*Darwin Core dataset element*, REQUIRED for checklist datasets<br />A unique identifier for the taxon, allowing the same taxon to be recognized across dataset versions as well as through data downloads and use (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/taxonID)<br />
Ideally, the taxonID is a persistent global unique identifier. As a minimum requirement, it has to be unique within the published dataset. It allows to recognize the same set of taxon information over time when the dataset indexing is refreshed; it links additional data like images or occurrence records; and it makes it possible to cite records e.g. in usage reports or in publications. This means that the taxonID needs to reliably stay with the taxon information at source, and to consistently refer to the same set of taxon information in published datasets and any underlying source data.

**scientificName**<a name="dcSciName2"></a><br />*Darwin Core dataset element*, REQUIRED for checklist datasets<br />The full scientific name, including authorship and year of the name where applicable. In the context of a checklist, the scientific name is the core data element of a taxon list or hierarchy that the dataset is set out to collate and publish (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/scientificName)<br />
Depending on the purpose of the checklist, scientific names may be of any hierarchical level, though typically would be of species rank or below for, e.g., regional floristic or faunistic checklists, Red List collations, or thematic inventories like marine organisms or taxonomic revisions of species groups. If the checklist is intended to publish a hierarchy (tree-like structure), add separate entries for the relevant upper taxonomic ranks, e.g. kingdom, class and family, and link them into a hierarchical structure using the parentNameUsageID (see below) to support unambiguous interpretation of the checklist entries.<br />
Valid scientific names are Latin names following the syntax rules of the respective taxon group (e.g. botanical nomenclature). Not permitted are, i.a., working names ("Mallomonas sp.4"), common names ("fruit fly"), or names containing identification qualifiers ("Anemone cf. nemorosa"). If common names are used, they should be supplied in addition to the scientific names, using the VernacularName set of fieds (see below).

**taxonRank**<a name="dcTaxonRank2"></a><br />*Darwin Core dataset element*, REQUIRED for checklist datasets<br />The taxonomic rank of the supplied scientific name (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/taxonRank)<br />
The taxon rank supports the interpretation of the scientific name during indexing, and supports matching the checklist records to the core taxonomy, especially in the case of names at genus level or above (monomials). While the format of higher taxon names in some groups contains indicators of their rank, this is not consistent across or even within groups, and cannot be reliably used for interpretation. For placing names correctly, explicitly specifying the taxon rank, alongside information on the higher taxonomy, is an important criterion. For practical purposes, the ranks used have to be (major) Linnean ranks: kingdom, phylum, class, order, family, genus, species. Both Latin or English terms are accepted.

**kingdom**<a name="dcKingdom2"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for checklist datasets<br />The full scientific name specifying the kingdom that the scientific name is classified under (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/kingdom) and other higher taxonomy, if possible<br />
With scientific names, there are numerous cases where the matching of a given name against the core taxonomy is unsure or ambiguous. This is the case, for example, with homonyms (identical names exist for different organisms, usually across groups), newly described names that are not yet part of the existing taxonomic tree, or spelling variants (typos, hyphenation etc). To support exact matching of a scientific name against the core taxonomy, additional names at higher ranks help interpretation and error prevention. For datasets where the hierarchical representation in the published data is not important, higher level names can be supplied as part of the record itself by adding the relevant DarwinCore fields, similar to occurrence datasets. 

Names should be scientific (latin) names at major Linnean ranks, like "Animalia" (kingdom) or "Rosaceae" (family). Not: common names ("animals"), abbreviations ("Rosac."), intermediate rank levels ("Tetrapoda" (superclass)), or polyphyletic or non-taxonomic groupings ("algae", "herbivora").

**parentNameUsageID**<a name="dcParentName"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for checklist datasets<br />The taxonID of the next available higher-ranked (parent) entry within the checklist dataset, if higher taxon names are supplied as separate entries in the list. See http://rs.tdwg.org/dwc/terms/parentNameUsageID.<br />This supports the representation of the dataset as a hierarchy, e.g. for the publication of a taxonomy.

**acceptedNameUsageID**<a name="dcAcceptedName"></a><br />*Darwin Core dataset element*, STRONGLY RECOMMENDED for checklist datasets<br />Within the record of a synonym, the taxonID of the accepted taxon name entry within the checklist dataset, if both synonyms and accepted names are supplied. See http://rs.tdwg.org/dwc/terms/acceptedNameUsageID<br />This supports the representation of synonymy for a taxonomic dataset.

**vernacularName**<a name="dcVernacularName"></a><br />*Darwin Core dataset element*, SHARE IF AVAILABLE for checklist datasets<br />See http://rs.gbif.org/extension/gbif/1.0/vernacularname.xml. When supplied, also add at least the language of the name, using [ISO 639-1 language codes](http://rs.gbif.org/vocabulary/iso/639-1.xml)

**title**<a name="emlTitle2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />The title under which the dataset will be published at gbif.org.<br />Recommendation: a brief, but descriptive title that characterizes the dataset in an international context and distinguishes it from similar datasets in other institutions. E.g. "Four new generic and 14 new specific synonymies in Pholcidae, and transfer of Pholcoides Roewer to Filistatidae (Araneae)". Not recommended: "Araneae (Part 1) part.". The title will, i.a., be part of the dataset citation on use of the data.

**description**<a name="emlDescription2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />An English language text, describing the dataset.<br/>
This may include a longer version of title, a description of geographic, temporal and taxonomic scope of the checklist, methodology and purpose of the underlying data compilation (e.g. red list, invasive species, freshwater taxa, regional flora), relevant literature references, and any other information you consider relevant to characterize the dataset. A second version of the description in another language than English may be added underneath. 

**publishing organization**<a name="emlPublisher2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />The title of the institution or organization that will be listed as the data publisher at gbif.org.<br />
The publishing organization is the institution which holds or owns the dataset and is in charge of its contents and maintenance. The title given should be the official title of the organization as registered with relevant authorities, listed on websites, and, if applicable, as stated in the project contract.

**type**<a name="emlType2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />The type of the dataset. Here: "checklist".<br />
The record type describes the main focus of all records contained in the dataset (core records). For a checklist dataset, the record type will always be "checklist". There may also be occurrences linked to checklist records (e.g. vouchers of a taxonomic treatment, herbarium records documenting a regional flora). The structure and requirements for this linked information follows the guidelines given for occurrence data publication [link].

**projectID**<a name="emlProjectID2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />A unique identifier for the project from which a dataset is derived<br />The record type is a GUID or other identifier that is near globally unique. **Note that this is required for BID projects.**

**license**<a name="emlLicense2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />A machine-readable statement of the rights attached to the published dataset. Use either CC0 or CC BY.<br />
As stated in the program call, all datasets funded under the BID program have to be made publicly available under either a [Creative Commons CC0 rights waiver](https://creativecommons.org/about/cc0/) or a [CC BY Attribution license](https://creativecommons.org/licenses/by/4.0/). Datasets without a valid license statement will not be accepted for publication. Machine-readable licenses allow automated data filters that give users clear guidance on the permitted use of records, thereby promoting data use and citation.

**contact(s)**<a name="emlContact2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />Contact data (minimum: name and email) for at least one administrative contact for the dataset.<br />Contact data will be publicly visible at gbif.org. This information is required to ensure the possibility of communication about the dataset. The administrative contact is the person/role to be consulted about content, quality, and rights questions concerning the dataset, both by users and by central services (GBIFS). If personal contact data cannot be supplied, it is possible to supply a functional contact through a role name (e.g. "curator") and email (collections@myhouse.com). It is necessary, though, that responsibilities for handling incoming communication are clearly defined and followed internally.

**creator(s)**<a name="emlCreator2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />Contact data (minimum: name and email) for the creator of the dataset (see [link])

**metadata provider(s)**<a name="emlMetadataProvider2"></a><br />*Dataset metadata EML*, REQUIRED for checklist datasets<br />Contact data (minimum: name and email) for the author of the dataset metadata (see [link])

**citation**<a name="emlCitation2"></a><br />*Dataset metadata EML*, STRONGLY RECOMMENDED for checklist datasets<br />a text specifying how your dataset should be cited in publications that make use of your data.<br />
To ensure your dataset gets cited the way you want, you can explicitly specify the requested citation. This text will be displayed on the dataset page, and it will be supplied to data users together with downloads that contain any contribution from your dataset. If no text is specified, GBIF will automatically supply a standard format citation that includes the dataset name and the name of the publishing institution, together with the date of the download and a reference to gbif.org.

#### Sampling-event datasets

**eventID**<a name="dcEventID"></a><br />*Darwin Core dataset element*, REQUIRED for sampling-event datasets<br />A unique identifier for the sampling event, allowing to link individual occurrences to a specific event, and to cross reference events to document e.g. time series (resampling) or synchronized sampling across a wider area (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/eventID))<br />
The eventID can be a persistent global unique identifier, or an identifier specific to the dataset. Its main function is to allow linking to related data (occurrences, other sampling events, site images etc.). While dataset-specific eventIDs are sufficient to refer to occurence records published within the same dataset, it is worth considering that very simple IDs like numbers could easily reoccur in other, unrelated datasets, and make external linkages ambiguous. In addition, the eventID needs to reliably stay with the sampling event information at source, and consistently refer to the same event, or else any data links will be broken.

**eventDate**<a name="dcEventDate2"></a><br/>*Darwin Core dataset element*, REQUIRED for sampling-event datasets<br />The date or date interval during which the sampling event as a whole took place, following ISO 8601 date-time standard (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#eventDate)<br />
The date or date span of e.g. a vegetation survey, a sampling trip, or the exposure period of an insect trap if it is defined as a single, continuous event. Supply the information to the best level of detail possible, using ISO 8601 notation, but contrary to the ISO specification, *do not* include time of day, and do not use leading zeros to pad incomplete dates. The year has to be four-digit, i.e. '2016', *not* '16'. In some cases, especially for historical data, only years may be known, in other cases, full dates can be supplied. For the levels of information that are unknown, avoid padding and instead end the value, to limit ambiguity of interpretation. If, for example, only year and month are known, represent this as 2016-04, *not* as 2016-04-01. Note that the *time should not be included as part of this element*, using eventTime instead where required. 

countryCode**<a name="dcCountryCode2"></a><br/>*Darwin Core dataset element*, REQUIRED for sampling-event datasets<br />A two-letter standard abbreviation for the country, territory or island that the sampling event took place in (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/countryCode)<br />
The country code is the proposed minimum standard to supply information about the geographic locality of the sampling event. It specifies the country, territory or island that the sampling event took place in; for countries with connections to marine areas, this includes the adjacent Exclusive Economic Zone (EEZ). The format for this field follows the ISO 3166-1-alpha-2 standard for country codes. Those are two-letter codes for each entity; lists can be found on-line. Note that for this data item, use of the codes is required, and full country names (in any language) will not be accepted. If you want to supply the country name in addition, add the appropriate element (http://rs.tdwg.org/dwc/terms/country).
In most cases, a sampling event can be linked to a specific country. In cases where it is not possible to supply a country code (e.g. marine data outside of coastal zones, or transects spanning more than one country), geographical coordinates should be supplied instead.

**samplingProtocol**<a name="dcSamplingProtocol"></a><br/>*Darwin Core dataset element*, REQUIRED for sampling-event datasets<br />The name of, reference to, or description of the method or protocol used during a sample event (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/samplingProtocol))<br />
Sample events typically use specific methods or follow certain protocols that standardize the sampling effort to a certain degree. Knowledge about the sampling protocol gives users additional information that is helpful for the interpretation of the attached occurrence records, e.g. what kind of organisms to expect or not expect within the dataset and whether the absence of a recording signifies absence in nature, or was outside the target group of the applied sampling methodology (e.g. "UV light trap"). If a more detailed description of the method or protocol exists, providing a reference is strongly encouraged (e.g. [*Penguins from space: faecal stains reveal the location of emperor penguin colonies*](http://dx.doi.org/10.1111/j.1466-8238.2009.00467.x). While there is no controlled vocabulary for this element, the goal is to, across datasets, gradually assemble a library of references for reuse, and to allow users to identify datasets that are based on comparable methods and protocols.

**sampleSizeValue** & **sampleSizeUnit**<a name="dcSamplingSize"></a><br/>*Darwin Core dataset element*, REQUIRED for sampling-event datasets<br />A numeric value and the corresponding unit for the value, specifying the size of an individual sample in the sampling event (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/sampleSizeValue and http://rs.tdwg.org/dwc/terms/sampleSizeUnit))<br />
The two sampleSize fields always go together, and specify the size of an individual sample within a sample event. The sample size can relate to time duration, a spatial lengths (e.g. of a trawl), an area or a volume. A vegetation plot, for example, may have a sampleSizeValue of 2 with a sampleSizeUnit of "square kilometer". Recommended best practice is to use a controlled vocabulary for the sampleSizeUnit.

**parentEventID**<a name="dcParentEventID"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />A cross-reference to the eventID of a broader event, e.g. a long-term monitoring project that the specific event is a part of, or a general vegetation survey of a larger area that is comprised of a number of sub-plots (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/parentEventID))
In order to be able to reference a parent event, this event needs to be specified as a separate entry, typically within the same dataset, carrying its own eventID. Refer to the eventID of the parent event in the sample event record to specify the relationship between the two entries. 

**samplingEffort**<a name="dcSamplingEffort"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />The measure for the amount of effort that was expended during a sampling event (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/samplingEffort))<br />
The amount of effort expended during a sampling event often has an influence on the result. It included factors like the number of observers involved, or the total time spent at collecting, the number of traps exposed over a certain amount of time, the total distance covered, and mode of transport used, while surveying a plot, etc. Examples for sampling effort are "40 trap-nights", "10 observer-hours". While there is no controlled vocabulary, the recommendation is to keep this information brief and factual, giving users enough information to compare between sampling events.

**locationID**<a name="dcLocationID"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />An internal or external reference that links to a set of data describing the sample event location, if available (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/locationID))<br />
Example: http://www.geonames.org/10793757/dnb-6.html. Note: if such a reference cannot be meaningfully supplied, consider supplying more location detail, e.g. through use of the data elements locality, minimumElevationInMeters, minimumDepthInMeters, stateProvince, locationRemarks (see http://rs.tdwg.org/dwc/terms/)

**decimalLatitude & decimalLongitude**<a name="dcLatLong"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />The geographic latitude or longitude, resp., in decimal degrees. Where coordinate values are available, both fields need to be supplied, together with the geodetic datum (below)(see *Darwin Core Terms: A quick reference guide* on [decimalLatitude](http://rs.tdwg.org/dwc/terms/decimalLatitude), [decimalLongitude](http://rs.tdwg.org/dwc/terms/decimalLongitude))<br />
Valid values lie between -90 and 90 incl. (latitude; 0: Equator), or -180/180 incl. (longitude; 0: Greenwich Meridian). Decimal coordinate values provide a geolocation of the sample site that is much more informative than the country name alone, and that is stable over time (unlike the borders of countries). In the context of a sample event, coordinates also provide a means to consistency-check that individual, linked occurrence records fall within the site of the sample event as a whole.
Note that a sample event that spans an area rather than a point location should additionally supply the coordinateUncertaintyInMeters (see below) to specify the approximate extension of the area. In any case, coordinate information should always be qualified by the geodetic datum (see below).

**geodeticDatum**<a name="dcGeodeticDatum2"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />The coordinate system and set of reference points upon which the geographic coordinates are based (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/geodeticDatum))<br />
Different geodetic systems exist, and the exact locality of a point depends on which reference system the coordinates refer to. This is why the system should always be explicitly named when known: depending on the geographic region, the datum shift between two systems can vary from zero to hundreds of meters for a given point. When no value is supplied, GBIF's indexing process assumes the reference system to be WGS 84 (World Geodetic System 1984, a global approximation at sea level and, i.a., base of GPS data); but the more frequently the geodetic datum can be supplied explicitly by data publishers, the more reliable the geographic representation of occurrences will become, e.g. through datum conversion. It is likewise important to explicitly document the lack of knowledge of the system used, as this increases confidence in data interpretation.
Examples: WGS84;EPSG:4326; unknown. 

**coordinateUncertaintyInMeters**<a name="dcUncertainty2"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />The horizontal distance from the given decimalLatitude and decimalLongitude in meters, describing the smallest circle containing the whole of the Location (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters))<br />
This is an indicator for the accuracy of the coordinate location, described as the radius of a circle around the stated point location. In the context of sample events, it combines with the decimal coordinates to specify the area covered by the sample event. Note that 0 (zero) is not a valid value for this measure. If the value is unknown or not applicable, the value should be empty (null). Examples: 30; 71; [empty]. Not: 0.

**footprintWKT**<a name="dcFootprintWKT"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />An alternative area description, specifying the location of the sample event in Well-known text (WKT) markup language (see [*Darwin Core Terms: A quick reference guide*](See http://rs.tdwg.org/dwc/terms/footprintWKT)) or [Wikipedia](https://en.wikipedia.org/wiki/Well-known_text))<br />
A WKT representation of the shape (footprint, geometry) that defines the location. This differs from the point-radius representation that is combined from the elements decimalLatitude, decimalLongitude and coordinateUncertaintyInMeters in that it can define shapes that are not circles. Example: a one-degree bounding box with opposite corners at (longitude=10, latitude=20) and (longitude=11, latitude=21) would be expressed in well-known text as "POLYGON ((10 20, 11 20, 11 21, 10 21, 10 20))". Note that it is possible to supply both a point-radius and a footprintWKT location for the same sample event.

**occurrenceStatus**<a name="dcOccurrenceStatus"></a><br/>*Darwin Core dataset element*, STRONGLY RECOMMENDED for sampling-event datasets<br />Note: this applies to associated occurrence data, not to the sample event itself. A qualifier for individual occurrence records, marking a taxon as either present or absent at a location during the sampling event (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/occurrenceStatus))<br />
Since sample datasets document the sampling effort exerted during the event, it can often be valuable to not only document taxa as being present (observed, collected) at the location at the time, but also to record negative occurrences (absences) for taxa that could be reasonably expected, but were not encountered in the event. An example is a floristic survey that estimates the abundance or coverage of plants in a certain area, working from a list of species that were encountered on earlier surveys of that same region. Recommendation: used the standard values of either "present" or "absent" to mark individual occurrence records. Note that absence records are currently not handled in the GBIF indexing processes, but that this is part of the medium term plans; that fact that processing is not yet implemented on that side does not hinder the collection and publication of absence data, making them available through the published dataset at source.

#### **Dataset metadata (EML)**

**title**<a name="emlTitle3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />The title under which the dataset will be published at gbif.org<br /> 
Recommendation: a brief, but descriptive title that characterizes the dataset in an international context and distinguishes it from similar datasets in other institutions. E.g. " Israeli Butterfly Monitoring Scheme (BMS-IL)". Not recommended: "Butterflies". The title will, i.a., be part of the dataset citation on use of the data.

**description**<a name="emlDescription3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />An English language text, describing the dataset.<br />
This may include a longer version of title, a description of geographic, temporal and taxonomic scope of the dataset, methodology and purpose of the underlying data compilation (e.g. protected habitat surveillance, faunistic inventory, deep sea trawl data), relevant literature references, and any other information you consider relevant to characterize the dataset. A second version of the description in another language than English may be added underneath. 

**publishing organization**<a name="emlPublisher3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />The title of the institution or organization that will be listed as the data publisher at gbif.org<br />The publishing organization is the institution which holds or owns the dataset and is in charge of its contents and maintenance. The title given should be the official title of the organization as registered with relevant authorities, listed on websites, and, if applicable, as stated in the project contract.

**type**<a name="emlType3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />The type of the dataset. Here: "samplingEvent".<br />
The record type describes the main focus of all records contained in the dataset (core records). For a sample event dataset, the record type will always be "samplingEvent". There should also be occurrences linked to sample event records. The structure and requirements for this linked information follows the guidelines given for occurrence data publication [link].

**projectID**<a name="emlProjectID3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />A unique identifier for the project from which a dataset is derived<br />The record type is a GUID or other identifier that is near globally unique. **Note that this is required for BID projects.**

**license**<a name="emlLicense3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />A machine-readable statement of the rights attached to the published dataset. Use either CC0 or CC BY.<br />
As stated in the program call, all datasets funded under the BID program have to be made publicly available under either a [Creative Commons CC0 rights waiver](https://creativecommons.org/about/cc0) or a [CC BY Attribution license](https://creativecommons.org/licenses/by/4.0). Datasets without a valid license statement will not be accepted for publication. Machine-readable licenses allow automated data filters that give users clear guidance on the permitted use of records, thereby promoting data use and citation.

**contact(s)**<a name="emlContact3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />Contact data (minimum: name and email) for at least one administrative contact for the dataset<br />
Contact data will be publicly visible at gbif.org. This information is required to ensure the possibility of communication about the dataset. The administrative contact is the person/role to be consulted about content, quality, and rights questions concerning the dataset, both by users and by central services (GBIFS). If personal contact data cannot be supplied, it is possible to supply a functional contact through a role name (e.g. "curator") and email (collections@myhouse.com). It is necessary, though, that responsibilities for handling incoming communication are clearly defined and followed internally.

**creator(s)**<a name="emlCreator3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />Contact data (minimum: name and email) for the creator of the dataset (see [link])

**metadata provider(s)**<a name="emlMetadataProvider3"></a><br />*Dataset metadata EML*, REQUIRED for sampling-event datasets<br />Contact data (minimum: name and email) for the author of the dataset metadata (see [link])

**citation**<a name="emlCitation3"></a><br />*Dataset metadata EML*, STRONGLY RECOMMENDED for sampling-event datasets<br />A text specifying how your dataset should be cited in publications that make use of your data.<br />To ensure your dataset gets cited the way you want, you can explicitly specify the requested citation. This text will be displayed on the dataset page, and it will be supplied to data users together with downloads that contain any contribution from your dataset. If no text is specified, GBIF will automatically supply a standard format citation that includes the dataset name and the name of the publishing institution, together with the date of the download and a reference to gbif.org.

Record details (Darwin Core)
The full list of terms can be found at: http://rs.tdwg.org/dwc/terms/index.htm

Terms mentioned above:
+ locality - http://rs.tdwg.org/dwc/terms/locality
+ minimumElevationInMeters - http://rs.tdwg.org/dwc/terms/minimumElevationInMeters
+ minimumDepthInMeters - http://rs.tdwg.org/dwc/terms/minimumDepthInMeters
+ stateProvince - http://rs.tdwg.org/dwc/terms/stateProvince
+ locationRemarks http://rs.tdwg.org/dwc/terms/locationRemarks

dataset metadata (EML)
Supplying additional metadata beyond the selection above will enrich the description and improve the fitness of use of your dataset. A full description of all supported elements can be found at
https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#basic-metadata.


-----------

```styledYaml
templates:
- path: eufund.html
```
