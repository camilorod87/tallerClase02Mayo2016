window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),
		escalaJupiter = true;
	escena.add(jupiter);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	escena.add(camara);

	var mercurio = crearPlaneta({
									tamano 	: tamanoJupiter*0.0341,
									imagen	: 'img/mercurio.jpg'
							  }),
		escalaJupiter = true;
	escena.add(mercurio);
	mercurio.position.x = -250;

	var venus = crearPlaneta({
									tamano 	: tamanoJupiter*0.0849,
									imagen	: 'img/venus.jpg'
							  }),
		escalaJupiter = true;
	escena.add(venus);
	venus.position.x = -150;

	var tierra = crearPlaneta({
									tamano 	: tamanoJupiter*0.0892,
									imagen	: 'img/tierra.jpg'
							  }),
		escalaJupiter = true;
	escena.add(tierra);
	tierra.position.x = -50;

	var marte = crearPlaneta({
									tamano 	: tamanoJupiter*0.0475,
									imagen	: 'img/marte.jpg'
							  }),
		escalaJupiter = true;
	escena.add(marte);
	marte.position.x = 50;




	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		mercurio.rotation.y += 0.030;
		venus.rotation.y += 0.030;
		tierra.rotation.y += 0.030;
		marte.rotation.y += 0.030;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
