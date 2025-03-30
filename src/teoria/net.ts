import * as net from 'net';

/**
 * Demuestra el uso de net.BlockList.
 */
function demoBlockList() {
  const blockList = new net.BlockList();

  // Agregar una dirección individual a la lista de bloqueo
  blockList.addAddress('192.168.1.1');

  // Agregar un rango de direcciones a la lista de bloqueo
  blockList.addRange('192.168.1.1', '192.168.1.255');

  // Agregar una subred a la lista de bloqueo
  blockList.addSubnet('192.168.1.0', 24);

  // Verificar si una dirección está bloqueada
  console.log(blockList.check('192.168.1.1')); // true

  // Acceder a las reglas de la lista de bloqueo
  console.log(blockList.rules);

  // Verificar si un valor es una BlockList
  console.log(net.BlockList.isBlockList(blockList)); // true
}

/**
 * Demuestra el uso de net.SocketAddress.
 */
function demoSocketAddress() {
  const socketAddress = new net.SocketAddress({
    address: '127.0.0.1',
    port: 8080,
    family: 'ipv4',
  });

  // Acceder a las propiedades de la dirección del socket
  console.log(socketAddress.address); // '127.0.0.1'
  console.log(socketAddress.port); // 8080
  console.log(socketAddress.family); // 4

  // Analizar una dirección de socket desde una cadena
  const parsedAddress = net.SocketAddress.parse('127.0.0.1:8080');
  console.log(parsedAddress);
}

/**
 * Demuestra el uso de net.Server.
 */
function demoServer() {
  const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    socket.on('data', (data) => {
      console.log('Recibido:', data.toString());
    });
    socket.on('end', () => {
      console.log('Cliente desconectado');
    });
  });

  // Escuchar en un puerto específico
  server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
  });

  // Manejar eventos del servidor
  server.on('error', (err) => {
    console.error('Error del servidor:', err);
  });
}

/**
 * Demuestra el uso de net.Socket.
 */
function demoSocket() {
  const socket = new net.Socket();

  // Conectar a un servidor
  socket.connect(8080, '127.0.0.1', () => {
    console.log('Conectado al servidor');
    socket.write('¡Hola, servidor!');
  });

  // Manejar eventos del socket
  socket.on('data', (data) => {
    console.log('Recibido:', data.toString());
  });
  socket.on('close', () => {
    console.log('Conexión cerrada');
  });
  socket.on('error', (err) => {
    console.error('Error del socket:', err);
  });
}

/**
 * Funciones de utilidad para la validación de direcciones IP.
 */
function demoIPValidation() {
  console.log(net.isIP('127.0.0.1')); // 4 (IPv4)
  console.log(net.isIPv4('127.0.0.1')); // true
  console.log(net.isIPv6('::1')); // true
}

// Llamar a las funciones de demostración para mostrar la funcionalidad
demoBlockList();
demoSocketAddress();
demoServer();
demoSocket();
demoIPValidation();

/**
 * Demuestra el uso avanzado de net.Server.
 */
function demoAdvancedServer() {
  const server = new net.Server();

  // Manejar eventos del servidor
  server.on('connection', (socket) => {
    console.log('Nueva conexión establecida');
    socket.write('Bienvenido al servidor');
  });

  server.on('close', () => {
    console.log('El servidor se ha cerrado');
  });

  server.on('drop', () => {
    console.log('Conexión rechazada debido al límite máximo de conexiones');
  });

  server.on('listening', () => {
    console.log('El servidor está escuchando');
  });

  server.on('error', (err) => {
    console.error('Error del servidor:', err);
  });

  // Configurar y escuchar en un puerto
  server.listen(8080, '127.0.0.1', () => {
    console.log('Servidor escuchando en 127.0.0.1:8080');
  });

  // Obtener la dirección del servidor
  console.log('Dirección del servidor:', server.address());

  // Obtener el número de conexiones activas
  server.getConnections((err, count) => {
    if (err) {
      console.error('Error al obtener conexiones:', err);
    } else {
      console.log('Conexiones activas:', count);
    }
  });

  // Configurar el número máximo de conexiones
  server.maxConnections = 5;

  // Cerrar el servidor
  setTimeout(() => {
    server.close(() => {
      console.log('Servidor cerrado');
    });
  }, 60000); // Cerrar después de 60 segundos

  // Referenciar y desreferenciar el servidor
  server.ref();
  server.unref();
}

// Llamar a la función de demostración avanzada
demoAdvancedServer();

/**
 * Demuestra el uso avanzado de net.Socket.
 */
function demoAdvancedSocket() {
  const socket = new net.Socket();

  // Manejar eventos del socket
  socket.on('connect', () => {
    console.log('Conexión establecida con el servidor');
  });

  socket.on('connectionAttempt', () => {
    console.log('Intento de conexión en curso');
  });

  socket.on('connectionAttemptFailed', () => {
    console.log('El intento de conexión falló');
  });

  socket.on('connectionAttemptTimeout', () => {
    console.log('El intento de conexión ha excedido el tiempo límite');
  });

  socket.on('drain', () => {
    console.log('El buffer de escritura está vacío');
  });

  socket.on('end', () => {
    console.log('El servidor ha cerrado la conexión');
  });

  socket.on('lookup', (err, address, family, host) => {
    if (err) {
      console.error('Error en la búsqueda de DNS:', err);
    } else {
      console.log(`Dirección DNS encontrada: ${address}, Familia: ${family}, Host: ${host}`);
    }
  });

  socket.on('ready', () => {
    console.log('El socket está listo para usarse');
  });

  socket.on('timeout', () => {
    console.log('El socket ha excedido el tiempo límite');
  });

  // Conectar al servidor
  socket.connect(8080, '127.0.0.1', () => {
    console.log('Conectado al servidor');
    socket.write('¡Hola, servidor!');
  });

  // Métodos adicionales del socket
  console.log('Dirección local:', socket.localAddress);
  console.log('Puerto local:', socket.localPort);
  console.log('Familia local:', socket.localFamily);

  console.log('Dirección remota:', socket.remoteAddress);
  console.log('Puerto remoto:', socket.remotePort);
  console.log('Familia remota:', socket.remoteFamily);

  console.log('Bytes leídos:', socket.bytesRead);
  console.log('Bytes escritos:', socket.bytesWritten);

  // Configurar opciones del socket
  socket.setEncoding('utf8');
  socket.setKeepAlive(true, 1000);
  socket.setNoDelay(true);
  socket.setTimeout(5000, () => {
    console.log('Tiempo límite alcanzado, cerrando el socket');
    socket.end();
  });

  // Métodos de control del socket
  socket.pause();
  console.log('Socket pausado');
  socket.resume();
  console.log('Socket reanudado');

  socket.ref();
  socket.unref();

  // Destruir el socket
  setTimeout(() => {
    socket.destroy();
    console.log('Socket destruido');
  }, 10000);
}

// Llamar a la función de demostración avanzada
demoAdvancedSocket();

/**
 * Demuestra el uso de net.connect y net.createConnection.
 */
function demoNetConnect() {
  // Conectar usando net.connect con puerto y host
  const socket1 = net.connect(8080, '127.0.0.1', () => {
    console.log('Conectado al servidor con net.connect (puerto y host)');
    socket1.end();
  });

  // Conectar usando net.connect con opciones
  const socket2 = net.connect({ port: 8080, host: '127.0.0.1' }, () => {
    console.log('Conectado al servidor con net.connect (opciones)');
    socket2.end();
  });

  // Conectar usando net.createConnection con puerto y host
  const socket3 = net.createConnection(8080, '127.0.0.1', () => {
    console.log('Conectado al servidor con net.createConnection (puerto y host)');
    socket3.end();
  });

  // Conectar usando net.createConnection con opciones
  const socket4 = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
    console.log('Conectado al servidor con net.createConnection (opciones)');
    socket4.end();
  });
}

/**
 * Demuestra el uso de net.createServer.
 */
function demoNetCreateServer() {
  const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    socket.on('data', (data) => {
      console.log('Recibido:', data.toString());
    });
    socket.on('end', () => {
      console.log('Cliente desconectado');
    });
  });

  server.listen(8080, () => {
    console.log('Servidor creado con net.createServer y escuchando en el puerto 8080');
  });
}

/**
 * Demuestra el uso de las funciones relacionadas con la familia de selección automática.
 */
function demoAutoSelectFamily() {
  // Obtener la familia de selección automática predeterminada
  const defaultFamily = net.getDefaultAutoSelectFamily();
  console.log('Familia de selección automática predeterminada:', defaultFamily);

  // Establecer una nueva familia de selección automática
  net.setDefaultAutoSelectFamily(true); // Enable auto-select family
  console.log('Nueva familia de selección automática establecida a IPv4');

  // Obtener el tiempo de espera predeterminado para la selección automática
  const defaultTimeout = net.getDefaultAutoSelectFamilyAttemptTimeout();
  console.log('Tiempo de espera predeterminado para selección automática:', defaultTimeout);

  // Establecer un nuevo tiempo de espera para la selección automática
  net.setDefaultAutoSelectFamilyAttemptTimeout(500);
  console.log('Nuevo tiempo de espera para selección automática establecido a 500 ms');
}

/**
 * Demuestra el uso de las funciones de validación de IP.
 */
function demoIPValidationFunctions() {
  console.log('Validación de IP:');
  console.log('127.0.0.1 es una IP válida:', net.isIP('127.0.0.1')); // 4 (IPv4)
  console.log('127.0.0.1 es IPv4:', net.isIPv4('127.0.0.1')); // true
  console.log('::1 es IPv6:', net.isIPv6('::1')); // true
}

// Llamar a las funciones de demostración
demoNetConnect();
demoNetCreateServer();
demoAutoSelectFamily();
demoIPValidationFunctions();
