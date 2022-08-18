pipeline {
    agent any

    environment {
        developer = 'Elmer Cruz'
    }

    stages {
        stage('hint/app') {
            when {
                expression {
                    return true
                }
            }
            steps {
                echo "This is the first step in the hint/app pipeline -> ${developer}"
                echo "Second step in the hint/app pipeline -> ${developer}"

                sshagent(credentials: ['ssh_key_ubuntu']) {
                    sh 'echo "In the server"'
                    sh 'cd /home/alonso'
                    sh 'ls'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline was executed'
        }

        success {
            echo 'Pipeline was a success'
        }

        failure {
            echo 'Pipeline failed :C'
        }
    }

}