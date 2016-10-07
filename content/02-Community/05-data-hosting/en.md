---
title: Data hosting
description: This quick guide will help you to make good decisions about how to host data from your BID project. 
category: Community
subCategory: Data hosting
image: /images/library.jpg
imageTitle: Library. By Paweł Sobociński via freeimages.com. Freeimages content license.
imageLink: http://www.freeimages.com/photo/library-1530267
---
# Hosting data from BID projects: A quick guide

<!-- toc -->
<!-- tocstop -->

-----------------------
## Introduction

An essential part of all BID projects is to ensure that the data you generate becomes openly accessible through GBIF.org and, potentially, other online platforms. We know that this process is challenging for many institutions, especially for those who are new to GBIF and do not have the facilities to host data on a server that is always online. 

It is valuable to distinguish between data publishing and data hosting. While the two activities are connected, they can be handled by different institutions.

Data publishing is the act of organizing and sharing data for use through the GBIF network. An institution becomes a GBIF data publisher by completing an online registration form and receiving endorsement through a participant node or the node managers committee. 

Data hosting is the act of getting the data onto a stable and accessible web platform. There is no formal process for hosting data and serving it to GBIF. Data publishing and data hosting do not need to be performed by the same institution (though they generally are). Data hosting is a significant commitment since it requires long-term capacity and resources to keep a data-publishing platform running continuously.  

Remember that regardless of where datasets are hosted, they will always be clearly associated with your institution and your country once you register as a GBIF data publisher. Here is a quick guide to help you to make the right decision about how your data will be hosted. 

-----------

## Hosting steps

Once your data have been organized into a supported data formats, proceed as follows:
  
1. Become a GBIF data publisher by completing the [publisher registration form](http://www.gbif.org/publishing-data/request-endorsement#/intro)
2. Find a publishing platform (IPT or other), preferably:
    a. Hosted in your institution (if possible)
    b. Hosted at a national node (if your country is [GBIF Participant](http://www.gbif.org/participation/participant-list))
    c. Hosted by another GBIF participant or data publisher (e.g. [data hosting centre](#centre))
    d. If none of the above apply, send a message to [BID community list](mailto:bid-community@lists.gbif.org), explaining your requirements. We will find an IPT for you!
3. Get access to the IPT (and basic training)
4. Start publishing your datasets

-----------

## Data hosting options

### Data hosting by the data publisher institution

Data publishers with the capacity to host their own data can install their own Integrated Publishing Toolkit (IPT) or other data publishing platform (<a name="ipt">See more below</a>) 

### Data hosting outside the data publisher institution  

Data publishers that have limited technical capacity, or that do not wish to run their own data publishing platforms, can opt to have their data hosted externally. This will save you time and money setting up and maintaining your own IPT instance, and you should be able to receive help desk support in your own language if the data host supports it. Although there are many possible data hosting options, organizations normally choose to work with a data host that shares an institutional, national, regional or thematic focus. 

If your country is a GBIF participant, the first option to consider is whether the national GBIF node offers a data hosting solution. Having your data hosted by your national node makes it easier to collect data of national interest and should enable you to connect with a local publisher network and access help desk support from your node.

For cases where data hosting is not available from a national node, GBIF has a list of trusted <a name="centre"></a>[data hosting centres](https://github.com/gbif/ipt/wiki/dataHostingCentres#data-hosting-centres){:target="_blank"} that meet a set of strict criteria, including consistently maintaining and administering an online IPT, demonstrating a successful track record of hosting data, and responding with prompt and knowledgeable help desk support. GBIF strongly recommends using a trusted hosting centre that can establish an account for you on their IPT and allow you to manage and publish your own datasets through GBIF.org.

A final option is for GBIF itself to host data using a cloud-hosted publishing platform. The GBIF Secretariat maintains a [cloud-hosted BID IPT](http://cloud.gbif.org/bid/about.do) that provides publishers with data hosting using shared hardware, software and storage services. Users of the service receive a robust, no-cost data hosting solution that is easy to migrate to a self-hosted installation in the future. However, national nodes and data hosting centres are likely to provide more hands-on service and assistance with data publishing and quality control aspects. As a result, BID projects should normally use the BID cloud-hosted IPT only if they are unable to find a satisfactory solution among the other hosting options.

-----------

## Intro to the Integrated Publishing Toolkit<a name="ipt"></a>

The IPT is free open-source software developed and supported by the GBIF Secretariat that organizations around the world use to publish and share biodiversity datasets through the GBIF network. The IPT can also function as a repository for data referenced in an article, as in this example of an [IPT installation hosted by the Canadensys network](http://data.canadensys.net/ipt).  

[Learn more about the technical requirements for hosting an IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#requirements)

### Test Mode 

The IPT can be installed in Test mode, which means that its hosted resources will not be indexed or publicly accessible by searching on GBIF.org. If you decide to install your own IPT, GBIF recommends that you try Test mode first in order to understand the registration process. Test mode is for running the IPT while evaluating it or conducting training; test-mode registrations will go into a test registry and resources will never be indexed. 

Once you are sure that the IPT is working the way that you expect, reinstall the software in Production mode to make the data actually discoverable through GBIF. Production mode registers datasets and publishes them so they are indexed and publicly accessible through GBIF.org.

-----------

## Terms of Use
The use of an external data host by a data publisher should be negotiated between the respective parties, ideally with a service-level agreement that outlines the terms and obligations for both the data publisher and the data host. The use of the BID cloud-hosted IPT will be governed by the [GBIF Data Publisher Agreement](http://www.gbif.org/terms/data-publisher). 

-----------

```styledYaml
templates:
- path: eufund.html
```
