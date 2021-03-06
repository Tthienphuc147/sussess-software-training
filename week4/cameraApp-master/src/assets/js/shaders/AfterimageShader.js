/**
 * @author HypnosNova / https://www.threejs.org.cn/gallery/
 *
 * Afterimage shader
 * I created this effect inspired by a demo on codepen:
 * https://codepen.io/brunoimbrizi/pen/MoRJaN?page=1&
 */
import * as THREE from 'three';
THREE.AfterimageShader = {

	uniforms: {
		"damp": { value: 0.96 },
		"tOld": { value: null },
		"tNew": { value: null },
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float damp;",

		"uniform sampler2D tOld;",
		"uniform sampler2D tNew;",

		"varying vec2 vUv;",
		
		"vec4 when_gt( vec4 x, float y ) {",

			"return max( sign( x - y ), 0.0 );",

		"}",

		"void main() {",
			"vec2 uv = vUv;",

			"vec4 texelOld = texture2D( tOld, uv );",
			"vec4 texelNew = texture2D( tNew, uv );",
			
			"texelOld *= damp * when_gt( texelOld, 0.1 );",

			"gl_FragColor = max(texelNew, texelOld);",

		"}"

	].join( "\n" )

};
