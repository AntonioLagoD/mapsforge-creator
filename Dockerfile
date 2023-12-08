FROM ubuntu:latest
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y wget git zip software-properties-common default-jdk vim mc

#RUN add-apt-repository -y ppa:ubuntugis/ppa
#RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y gdal-bin python3-gdal

RUN wget https://github.com/openstreetmap/osmosis/releases/download/0.48.3/osmosis-0.48.3.tgz -O osmosis.tgz
RUN mkdir osmosis
RUN tar zxvf osmosis.tgz -C /osmosis 
RUN rm osmosis.tgz
RUN chmod a+x osmosis/bin/osmosis 

RUN wget https://repo1.maven.org/maven2/org/mapsforge/mapsforge-map-writer/0.20.0/mapsforge-map-writer-0.20.0-jar-with-dependencies.jar 
RUN git clone https://github.com/AntonioLagoD/mapsforge-creator.git
RUN chmod a+x mapsforge-creator/genEspanha.sh
RUN chmod a+x mapsforge-creator/genGalicia.sh
RUN chmod a+x mapsforge-creator/genPortugal.sh
RUN chmod a+x mapsforge-creator/map-creator.sh

COPY map-writer.jar /osmosis/lib/default/
COPY poi-writer.jar /osmosis/lib/default/  
RUN mkdir /etc/osmosis
COPY .osmosis /etc/osmosis/osmosis
COPY .osmosis /root/.osmosis

#ENV OSMOSIS_HOME="/osmosis"
#ENV THREADS=8
#ENV SKIP_POI_CREATION="true"
#ENV SKIP_MAP_CREATION="false"

ENTRYPOINT ["/bin/bash"]
CMD ["mapsforge-creator/genEspanha.sh"]

