---
title: Data quality requirements
description: Publishers play an essential role not simply in sharing datasets, but also in managing their quality, completeness and usefulness and ensuring their integration and value within GBIF’s global knowledge base.
category: About
subcategory: 
---

# Data quality requirements

---

## Overview

To share data through GBIF.org, publishers typically have to collate or transform existing datasets into a suitably standardized format. This work may include additional processing, content editing and configuration to map a dataset’s content into one of the available data transfer formats as well as publication through one of the available data publishing tools (such as GBIF's [Integrated Publishing Toolkit](http://gbif.org/ipt), or IPT).

Once published, GBIF’s real-time infrastructure ‘indexes’ or ‘harvests’ new datasets, integrating them into a common access system where users can retrieve any and all data through common search and download services. As datasets are indexed, GBIF.org performs additional checks, interpretation and conversion routines to ensure that data are interoperable and comply with minimum standards of data formats, data quality and fitness for use. But many criteria for quality and usability of data, however, are best and most easily handled when addressed at their source: the individual dataset.

Publishers thus play an essential role not simply in sharing datasets, but also in managing their quality, completeness and usefulness as well as ensuring their integration and value within GBIF’s global knowledge base.

In practice, we encourage those responsible for publishing data to get acquainted with the expected data formats and content requirements as early as possible in the process. Doing so will save a lot of effort that may be needed at later stages, for example, in adding data conversions, capturing information for required or highly recommended fields, or performing and addressing final pre-publication data-quality checks


## Occurrence-only datasets

Term | [Status](#status) | Location
[title](#emlTitle) | Required | Dataset metadata (EML)
[description](#emlDescription) | Required | Dataset metadata (EML)
[publishing organization](#emlPublisher) | Required | Dataset metadata (EML)
[type](#emlType) | Required | Dataset metadata (EML)
[license](#emlLicense) | Required | Dataset metadata (EML)
[basis of record](#emlBasis) | Required | Dataset metadata (EML)
[contact(s)](#emlContact) | Required | Dataset metadata (EML)
[creator(s)](#emlCreator) | Required | Dataset metadata (EML)
[metadata provider(s)](#emlMetadata) | Required | Dataset metadata (EML)
[occurrenceID](#dcOccurrenceID) | Required | Darwin Core record details
[basisOfRecord](#dcBasis) | Required | Darwin Core record details
[scientificName](#dcSciName) | Required | Darwin Core record details
[year / month / day](#dcYmd) | Required | Darwin Core record details
[eventDate](#dcEventDate) | Required | Darwin Core record details
[countryCode](#dcCountryCode) | Required | Darwin Core record details
[citation](#emlCitation) | Strongly recommended | Dataset metadata (EML)
[taxonRank](#dcTaxonRank) | Strongly recommended | Darwin Core record details
[kingdom](#dcKingdom) | Strongly recommended | Darwin Core record details
[decimalLatitude & decimalLongitude](#dcLatLong) | Strongly recommended | Darwin Core record details
[geodeticDatum](#dcGeodeticDatum) | Strongly recommended | Darwin Core record details
[coordinateUncertaintyInMeters](#dcUncertainty) | Strongly recommended | Darwin Core record details
[individualCount<br />organismQuantity & organismQuantityType](#dcCount) | Strongly recommended | Darwin Core record details
[additional metadata](#emlAdditional) | Share if available | Dataset metadata (EML)
[informationWithheld](#dcWithheld) | Share if available | Darwin Core record details
[dataGeneralizations](#dcGeneralizations) | Share if available | Darwin Core record details
[eventTime](#dcEventTime) | Share if available | Darwin Core record details
[country](#dcCountry) | Share if available | Darwin Core record details

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

title<a name="emlTitle"></a> | **The title displayed for the dataset on GBIF.org** | Recommended: a brief, but descriptive title that characterizes the dataset in an international context and distinguishes it from similar datasets in other institutions, e.g., 'Birds fallen at Danish Lighthouses 1883 through 1939', rather than "Birds". The title will be part of the dataset citation on use of the data.

description<a name="emlDescription"></a> | **An English language text describing the dataset** | This may include a longer version of title, a description of geographic, temporal and taxonomic scope of the collection, methodology and purpose of the underlying project or collection, relevant literature references, and any other information you consider relevant to characterize the dataset. A second version of the description in another language than English may be added underneath

publishing organization<a name="emlPublisher"></a> | **The name of the institution or organization listed as the data publisher on GBIF.org** | The publishing organization is the institution which holds or owns the dataset and is in charge of its contents and maintenance. The title given should be the official title of the organization as registered with relevant authorities, listed on websites, and, if applicable, as stated in the project contract.

type<a name="emlType"></a> | **The type, or class, of the dataset** | The record type describes the 'core' or main focus of all records contained in a given dataset. For an occurrence-only dataset, the value here will always be "occurrence". *N.B.: Occurrences may also appear as part of checklists and sample-event datasets.*

license<a name="emlLicense"></a> | **A machine-readable statement of the rights assigned to the published dataset** | Datasets without a valid license statement will not be accepted for publication. Machine-readable licenses allow automated data filters and give users clear guidance on permitted uses of the data, thereby promoting data use and citation. *N.B.: All datasets funded under the [BID programme](http://gbif.org/bid) must be published under either a Creative Commons [CC0 rights waiver](https://creativecommons.org/about/cc0) or a [CC BY Attribution license](https://creativecommons.org/licenses/by/4.0).*


basis of record<a name="emlBasis"></a> | **The type of the individual records within the dataset, provided they are all of the same kind** |  [Available values](http://rs.gbif.org/vocabulary/dwc/basis_of_record.xml): PreservedSpecimen, FossilSpecimen, LivingSpecimen, HumanObservation, MachineObservation, MaterialSample. The basis of record is an important data filter that allows a user to distinguish between, e.g., in-situ and ex-situ living organisms for population studies, or to distinguish between reported field observations and vouchered, specimen-based information whose objects can be revisited. Note that for datasets with mixed content, the basisOfRecord element is also available at [record level](#dcBasis), and content should always be supplied there as well. Also note that the value "Occurrence" should not be used, even though it is listed in some places alongside the others.

contact(s)<a name="emlContact"></a> | **Contact data—at least a name and email—for at least one administrative contact for the dataset** | Contact data will be publicly visible at gbif.org. This information is required to ensure the possibility of communication about the dataset. The administrative contact is the person/role to be consulted about content, quality, and rights questions concerning the dataset, both by users and by the GBIF Secretariat. If personal contact data cannot be supplied, it is possible to supply a functional contact through a role name (e.g. "Curator") and email [collections@museum.org](http://#)). It is necessary, though, that responsibilities for handling incoming communication are clearly defined and followed internally.

creator(s)<a name="emlCreator"></a> | **contact data—at least a name and email—for the creator of the dataset** | (see [link])

metadata provider(s)<a name="emlMetadata"></a> | **contact data—at least a name and email—for the author of the dataset metadata** | (see [link])

occurrenceID<a name="dcOccurrenceID"></a> | **A unique identifier for the occurrence, allowing the same occurrence to be recognized across dataset versions as well as through data downloads and use** (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#occurrenceID))| Ideally, the occurrenceID is a persistent global unique identifier. As a minimum requirement, it has to be unique within the published dataset. It allows to recognize the same occurrence over time when the dataset indexing is refreshed; it links additional data like images; and it makes it possible to cite records e.g. in usage reports or in publications. This means that the occurrenceID needs to reliably stay with the occurrence at source, and to consistently refer to the same occurrence in published datasets and any underlying source data.

basisOfRecord<a name="dcBasis"></a> | **The type of the individual record, e.g. observation, physical specimen, fossil, living ex-situ, culture collection specimen** (note the [metadata entry](#emlBasis) above as well as [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#basisOfRecord) | Even if the basis of record is supplied for the dataset as a whole, it is recommended practice to add it to each individual record as well to make the information explicitly available, e.g. in downloads containing data from a range of different datasets.

scientificName<a name="dcSciName"></a> | **The full scientific name of the organism, to the lowest level taxonomic rank that is possible to supply, and including authorship and year of the name where applicable** | The scientific name is one of the most important and frequently used search criteria for data access, and is indispensable for identifying the biological organism that is at the center of any occurrence record (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/scientificName). As occurrence records are the evidence of the occurrence of a species (or other taxa) at a particular place on a specified date, the scientific name is one of the core pieces of information required for any record. Ideally, the name supplied is at species level or below. If the determination only allows for information on a higher level, this is acceptable as well. Valid scientific names are Latin names following the syntax rules of the respective taxon group (e.g. botanical nomenclature). Not permitted are, i.e., working names ("*Mallomonas* sp.4"), common names ("fruit fly"), or names containing identification qualifiers ("*Anemone cf. nemorosa*").

year / month / day<a name="dcYmd"></a> | The date on which, e.g., the specimen was collected, or the observation was made (see *Darwin Core Terms: A quick reference guide* on [year](http://rs.tdwg.org/dwc/terms/year), [month](http://rs.tdwg.org/dwc/terms/month) and [day](http://rs.tdwg.org/dwc/terms/day).

eventDate<a name="dcEventDate"></a> *Use only if [year / month / day](#dcYmd) cannot be applied*: **the date interval during which e.g. the specimen was collected or the observation was made, following ISO 8601 date-time** (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/#eventDate)) | The date span e.g. of a sampling trip, if the exact date of the occurrence event cannot be determined to the day. Only if the dataset includes both date spans and individual dates for occurrence events can individual dates be included here as well. Supply the information to the best level of detail possible, using ISO 8601 notation, but contrary to the ISO specification, do not include time of day. In some cases, especially for historical data, only years may be known, in other cases, full dates are supplied. For the levels of information that are unknown, avoid padding and instead end the value, to limit ambiguity of interpretation. If, for example, only year and month are known, represent this as 2016-04, not as 2016-04-01. **N.B. Time should not be included as part of this element**, using eventTime instead where required.

countryCode<a name="dcCountryCode"></a> | A two-letter standard abbreviation for the country of the occurrence locality (see [*Darwin Core Terms: A quick reference guide*](http://rs.tdwg.org/dwc/terms/countryCode). As the third core part of the documentation of a taxon occurrence, information on the collection or observation locality (geographic reference) is essential for any record. The country code is the proposed minimum standard to supply this information. The format for this field follows the ISO 3166-1-alpha-2 standard for country codes. Those are two-letter codes for each country; lists can be found on-line. Note that for this data item, use of the codes is required, and full country names (in any language) will not be accepted. Publishers who wish to supply the country name in addition may add the [appropriate element](http://rs.tdwg.org/dwc/terms/country). In most cases, occurrences can be linked to a specific country. In cases where it is not possible to supply a country code (e.g. marine data outside of coastal zones), geographical coordinates should be supplied instead. 

citation<a name="emlCitation"></a> | |

taxonRank<a name="dcTaxonRank"></a> | |

kingdom<a name="dcKingdom"></a> | |

decimalLatitude & decimalLongitude<a name="dcLatLong"></a> | |

geodeticDatum<a name="dcGeodeticDatum"></a> | |

coordinateUncertaintyInMeters<a name="dcUncertainty"></a> | |

individualCount<br />organismQuantity & organismQuantityType<a name="dcCount"></a> | |

additional metadata<a name="emlAdditional"></a> | **Enrich the description and improve the fitness of use of your dataset** | See [complete description of all supported elements](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#basic-metadata).

informationWithheld(<a name="dcWithheld"></a> |  | See http://rs.tdwg.org/dwc/terms/informationWithheld

dataGeneralizations<a name="dcGeneralizations"></a> | | See http://rs.tdwg.org/dwc/terms/dataGeneralizations

eventTime<a name="dcEventTime"></a> | | See http://rs.tdwg.org/dwc/terms/eventTime

country<a name="dcCountry"></a> | | See http://rs.tdwg.org/dwc/terms/country

