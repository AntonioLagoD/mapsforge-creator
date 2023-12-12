FROM ubuntu:latest
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends --yes wget git zip default-jdk gdal-bin python3-gdal && \
	wget https://github.com/openstreetmap/osmosis/releases/download/0.48.3/osmosis-0.48.3.tgz -O osmosis.tgz && \
	mkdir osmosis && \
	tar zxvf osmosis.tgz -C /osmosis && \
	rm osmosis.tgz && \
	chmod a+x osmosis/bin/osmosis && \
	git clone https://github.com/AntonioLagoD/mapsforge-creator.git && chmod a+x mapsforge-creator/*.sh && \
	mkdir /etc/osmosis && \
	rm -rf /var/lib/apt/lists/* && \
	rm -rf /var/cache/apt/archives/*.* && \
	apt-get remove -y git

COPY *.jar /osmosis/lib/default/
COPY .osmosis /etc/osmosis/osmosis
COPY .osmosis /root/.osmosis

ENTRYPOINT ["/bin/bash"]
CMD ["mapsforge-creator/menu.sh"]

