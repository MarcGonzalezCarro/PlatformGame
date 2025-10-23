<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="Player" tilewidth="120" tileheight="80" tilecount="192" columns="16">
 <image source="spritesheet.png" width="2000" height="1000"/>
 <tile id="16">
  <properties>
   <property name="loop" type="bool" value="false"/>
   <property name="name" value="die"/>
  </properties>
  <animation>
   <frame tileid="16" duration="50"/>
   <frame tileid="17" duration="50"/>
   <frame tileid="18" duration="50"/>
   <frame tileid="19" duration="50"/>
   <frame tileid="20" duration="50"/>
   <frame tileid="21" duration="50"/>
   <frame tileid="22" duration="50"/>
   <frame tileid="23" duration="50"/>
   <frame tileid="24" duration="50"/>
   <frame tileid="25" duration="50"/>
  </animation>
 </tile>
 <tile id="48">
  <properties>
   <property name="loop" type="bool" value="true"/>
   <property name="name" value="idle"/>
  </properties>
  <animation>
   <frame tileid="48" duration="100"/>
   <frame tileid="49" duration="100"/>
   <frame tileid="50" duration="100"/>
   <frame tileid="51" duration="100"/>
   <frame tileid="52" duration="100"/>
   <frame tileid="53" duration="100"/>
   <frame tileid="54" duration="100"/>
   <frame tileid="55" duration="100"/>
   <frame tileid="56" duration="100"/>
   <frame tileid="57" duration="100"/>
  </animation>
 </tile>
 <tile id="64">
  <properties>
   <property name="loop" type="bool" value="true"/>
   <property name="name" value="move"/>
  </properties>
  <animation>
   <frame tileid="64" duration="100"/>
   <frame tileid="65" duration="100"/>
   <frame tileid="66" duration="100"/>
   <frame tileid="67" duration="100"/>
   <frame tileid="68" duration="100"/>
   <frame tileid="69" duration="100"/>
   <frame tileid="70" duration="100"/>
   <frame tileid="71" duration="100"/>
   <frame tileid="72" duration="100"/>
   <frame tileid="73" duration="100"/>
  </animation>
 </tile>
 <tile id="80">
  <properties>
   <property name="loop" type="bool" value="false"/>
   <property name="name" value="jump"/>
  </properties>
  <animation>
   <frame tileid="80" duration="50"/>
   <frame tileid="81" duration="50"/>
   <frame tileid="82" duration="50"/>
   <frame tileid="83" duration="50"/>
   <frame tileid="84" duration="50"/>
   <frame tileid="85" duration="50"/>
   <frame tileid="86" duration="50"/>
   <frame tileid="87" duration="50"/>
   <frame tileid="88" duration="50"/>
   <frame tileid="89" duration="50"/>
   <frame tileid="90" duration="50"/>
   <frame tileid="91" duration="50"/>
  </animation>
 </tile>
</tileset>
