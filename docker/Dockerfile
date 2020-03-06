FROM postgres:12.2

ENV POSTGRES_PASSWORD test
ENV POSTGRES_USER test
ENV POSTGRES_DB test

RUN localedef -i fr_FR -c -f UTF-8 -A /usr/share/locale/locale.alias fr_FR.UTF-8
ENV LANG fr_FR.utf8