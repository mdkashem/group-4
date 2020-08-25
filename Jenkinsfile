pipeline {
  agent any
  stages {
    stage('Build Angular') {
      agent {
        docker {
          image 'node:12.18-alpine'
        }

      }
      steps {
        sh '''echo "hello"
cd project-task-force

npm install '''
        sh 'mvn package'
        sh '''npm i
npm run build'''
      }
    }

  }
}