CREATE TABLE [USER] (
    numEmpleado VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    psw VARCHAR(50) NOT NULL,
    active BIT DEFAULT 1 NOT NULL
);

CREATE TABLE [ROLE] (
    id INT PRIMARY KEY IDENTITY,
    roleName VARCHAR(100)
);

CREATE TABLE USER_ROLE (
    idUser VARCHAR(10),
    idRole INT,
    PRIMARY KEY (idUser, idRole),
    FOREIGN KEY (idUser) REFERENCES [USER](numEmpleado),
    FOREIGN KEY (idRole) REFERENCES [ROLE](id)
);

CREATE TABLE PERMISSION (
    id INT PRIMARY KEY IDENTITY,
    permissionName VARCHAR(100)
);

CREATE TABLE ROLE_PERMISSION (
    idRole INT,
    idPermission INT,
    PRIMARY KEY (idRole, idPermission),
    FOREIGN KEY (idRole) REFERENCES [ROLE](id),
    FOREIGN KEY (idPermission) REFERENCES PERMISSION(id)
);

CREATE TABLE MODULE (
    id INT PRIMARY KEY IDENTITY
);

CREATE TABLE WORKSTATION (
    id INT PRIMARY KEY,
    machineType VARCHAR(100) NOT NULL,
    stateStation INT NOT NULL DEFAULT 3,
    module INT NOT NULL,
    FOREIGN KEY (module) REFERENCES MODULE(id)
);

CREATE TABLE REFACTION (
    id INT PRIMARY KEY IDENTITY,
    nameRefaction VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE INCOME (
    idRefaction INT,
    idUser VARCHAR(10),
    dateIncome DATETIME DEFAULT GETDATE(),
    cantity INT NOT NULL,
    PRIMARY KEY (idRefaction, idUser, dateIncome),
    FOREIGN KEY (idRefaction) REFERENCES REFACTION(id),
    FOREIGN KEY (idUser) REFERENCES [USER](numEmpleado)
);

CREATE TABLE [ORDER] (
    folio INT PRIMARY KEY IDENTITY,
    dateTimeOrder DATETIME NOT NULL,
    failure VARCHAR(400) NOT NULL,
    operatorId VARCHAR(10) NOT NULL,
    operatorName VARCHAR(200) NOT NULL,
    stoppedStation BIT NOT NULL,
    typeMaintenance VARCHAR(50) NOT NULL,
    repairStart DATETIME,
    repairEnd DATETIME,
    repairDetail VARCHAR(400),
    technical VARCHAR(10),
    reportUser VARCHAR(10),
    workStation INT,
    FOREIGN KEY (technical) REFERENCES [USER](numEmpleado),
    FOREIGN KEY (reportUser) REFERENCES [USER](numEmpleado),
    FOREIGN KEY (workStation) REFERENCES WORKSTATION(id)
);

CREATE TABLE EXPENSE (
    idOrder INT,
    idRefaction INT,
    dateExpense DATETIME DEFAULT GETDATE(),
    cantity INT NOT NULL,
    PRIMARY KEY (idOrder, idRefaction, dateExpense),
    FOREIGN KEY (idOrder) REFERENCES [ORDER](folio),
    FOREIGN KEY (idRefaction) REFERENCES REFACTION(id)
);
