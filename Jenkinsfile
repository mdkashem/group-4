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
        sh '''cd project-task-force
npm i 
npm run build'''
      }
    }

  }
}