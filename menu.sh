#!/bin/bash
echo " MENU DE MAPAS "
echo "1. ESPAÑA"
echo "2. GALICIA"
echo "3. PORTUGAL"
echo "4. ITALIA"
echo "OTRA OPCIÓN --> SALIR "
echo -n "Escoger opcion: "
read opcion
case $opcion in
1) echo "/mapsforge-creator/map-creator.sh europe/spain hd es,gl"
/mapsforge-creator/map-creator.sh europe/spain hd es,gl
exit 0;;
2) echo "/mapsforge-creator/map-creator.sh europe/spain/galicia hd es,gl"
/mapsforge-creator/map-creator.sh europe/spain/galicia hd es,gl
exit 0;;
3) echo "/mapsforge-creator/map-creator.sh europe/portugal hd es,gl"
/mapsforge-creator/map-creator.sh europe/portugal hd pt,es
exit 0;;
4) echo "/mapsforge-creator/map-creator.sh europe/italy hd es,gl"
/mapsforge-creator/map-creator.sh europe/italy hd it,es
exit 0;;
*) echo "Saliendo ..."
exit 0;;
esac
