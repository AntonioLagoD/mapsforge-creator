FROM ubuntu:latest
RUN apt-get update \
&& apt-get install -y wget git zip software-properties-common default-jdk awscli
RUN add-apt-repository -y ppa:ubuntugis/ppa \
&& apt update \
&& apt install -y gdal-bin python-gdal

RUN wget https://github.com/openstreetmap/osmosis/releases/download/0.49.2/osmosis-0.49.2.tar
RUN tar xvf osmosis-0.49.2.tar 
RUN mv osmosis-0.49.2 osmosis
RUN rm osmosis-0.49.2.tar
RUN chmod a+x osmosis/bin/osmosis 

RUN git clone https://github.com/AntonioLagoD/mapsforge-creator.git
RUN chmod a+x mapsforge-creator/genEspanha.sh
RUN chmod a+x mapsforge-creator/genGalicia.sh
RUN chmod a+x mapsforge-creator/genPortugal.sh
RUN chmod a+x mapsforge-creator/map-creator.sh

#ENV OSMOSIS_HOME="/osmosis"
#ENV THREADS=8
#ENV SKIP_POI_CREATION="true"
#ENV SKIP_MAP_CREATION="false"

ENTRYPOINT ["/bin/bash"]
CMD ["mapsforge-creator/genEspanha.sh"]

