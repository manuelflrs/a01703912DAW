CREATE TABLE Zombie
(
	IDZombie int not null AUTO_INCREMENT,
	Nombre varchar(20) not null,
	PRIMARY KEY(IDZombie)
);

CREATE TABLE Estado
(
	IDEstado int not null AUTO_INCREMENT,
	NombreEstado varchar(20) not null,
	PRIMARY KEY(IDEstado)
);

CREATE TABLE Registros
(
    IDZombie int         not null,
    IDEstado int         not null,
    Nombre   varchar(20) not null,
    Fecha    datetime default now(),
    PRIMARY KEY (IDZombie, IDEstado),
    FOREIGN KEY (IDZombie) references Zombie (IDZombie),
    FOREIGN KEY (IDEstado) references Estado (IDEstado)
);