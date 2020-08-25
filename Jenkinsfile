pipeline {
  agent any
  stages {
    stage('Angular Build') {
      agent {
        docker {
          image 'node:12.18-alpine'
        }

      }
      steps {
        sh '''npm i
npm run build'''
      }
    }

  }
}