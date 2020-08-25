pipeline {
  agent any
  stages {
    stage('Build Angular') {
      agent {
        docker {
          image 'maven:3.6.3-adoptopenjdk-8'
        }

      }
      steps {
        sh '''echo "hello"
cd project-task-force

npm install '''
        sh 'mvn package'
      }
    }

  }
}